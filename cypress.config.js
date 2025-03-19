const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const neatCSV = require('neat-csv');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require('exceljs');
module.exports = defineConfig({
  projectId: '7zu5e8',
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  projectId: "qj5kqo",
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  e2e: {

    setupNodeEvents(on, config) {
      config.db = {
        userName: "mmdba",
        password: "11THaug@1987",
        server: "mmdba.database.windows.net",
        options: {
          database: "mmdba",
          encrypt: true,
          rowCollectionOnRequestCompletion: true
        }
      }
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);

      on('task', {
        excelToJsonConvertor(filepath) {
          const result = excelToJson({
            source: fs.readFileSync(filepath)
          })
          return result
        }
      })
      on('task', {
        async writeToExcelFile({filepath, fruit1, fruit1newname, fruit2, fruit2newname, amount}) {
          const workbook = new ExcelJs.Workbook();
          await workbook.xlsx.readFile(filepath);
          const worksheet = workbook.getWorksheet('Sheet1');
          const row1 = worksheet.getRow(1)
          row1.eachCell((cell, cellNo) => {
            if (cell.value === "fruit_name")
              indexOfFruit = cellNo
            if (cell.value === "price")
              indexOfPrice = cellNo
          })
          worksheet.eachRow((row, rowNo) => {
            console.log(rowNo)
            if ((row.getCell(indexOfFruit)).value === fruit1) {
              row.getCell(indexOfFruit).value = fruit1newname
              row.getCell(indexOfPrice).value = row.getCell(indexOfPrice).value + amount
            }
            if ((row.getCell(indexOfFruit)).value === fruit2) {
              row.getCell(indexOfFruit).value = fruit2newname
              row.getCell(indexOfPrice).value = row.getCell(indexOfPrice).value + amount
            }
          })

          return workbook.xlsx.writeFile(filepath).then(()=>{
            return true
          })
          .catch((error)=>{
            return false
          })

        }

      })
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*/*.js"
  },
});
