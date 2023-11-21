//const name = require('./1-name');
//const sayHi = require('./2-utils')
//const data = require('./3-alternative-flavour')

//require('./4-mind-granade')
/*console.log(data)
sayHi('Susan')
sayHi(name.john)
sayHi(name.peter)*/

//npm - global comands, comes with node
//npn --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [[1, [2, [3, [4]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)