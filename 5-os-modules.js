//const os = require('os');
//const user = os.userInfo();

//console.log(`The system uptime is ${os.uptime} seconds` );

const system = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    FreeSoace: os.freemem()
}
console.log(`
NAME: ${system.name}
RELEASE: ${system.release}
TOTALMEMORY: ${system.totalMemory}
FREE SPACE: ${system.FreeSoace}
`)
