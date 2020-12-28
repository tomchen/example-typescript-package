/* eslint-disable */
const fs = require('fs')
const Path = require('path')
const fileName = '../package.json'
const file = require(fileName)
/* eslint-enable */

const args = process.argv.slice(2)

for (let i = 0, l = args.length; i < l; i++) {
  if (i % 2 === 0) {
    file[args[i]] = args[i + 1]
  }
}

fs.writeFile(
  Path.join(__dirname, fileName),
  JSON.stringify(file),
  function writeJSON(err) {
    if (err) {
      return console.log(err)
    }
    console.log(JSON.stringify(file))
    console.log('Writing to ' + fileName)
  }
)
