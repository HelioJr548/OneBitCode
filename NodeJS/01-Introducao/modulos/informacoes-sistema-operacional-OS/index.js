const os = require('node:os');

// os.platform(): Returns the platform of the operating system (e.g. “win32” for Windows, “darwin” for macOS)
const plataforma = os.platform();
console.log('Plataforma do SO: ', plataforma);

// os.arch(): Returns the system architecture (e.g. “x64” for 64-bit systems).
const arquitetura = os.arch();
console.log('Arquitetura do SO: ', arquitetura);

// os.cpus(): Returns information about the CPU cores, including model, speed and more.
const processadores = os.cpus();
console.log('Informações da CPU:', processadores[0]);

// os.totalmem(): Returns the total amount of system memory in bytes.
const memoria = os.totalmem();
console.log('Total de memória do PC:', memoria / 1024 / 1024 / 1024, 'GB');
