const {readFileSync, writeFileSync} = require('fs');
console.log('start')

const first = readFileSync('./content/first.text', 'utf8')
const second = readFileSync('./content/second.text', 'utf8')
const test = readFileSync('./content/subfolder/test.text', 'utf8')

writeFileSync(
    './content/result-sync.text', 
    `This is the result: ${first}, ${test}`,
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')