import os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';

export { getSystemInfo, saveLog, printLog };

const systemPlatformMap = {
	win32: 'Windows',
	linux: 'linux',
	darwin: 'MacOS',
	freebsd: 'FreeBSDD',
};

function getSystemInfo() {
	const system = systemPlatformMap[os.platform()];
	const arch = os.arch();
	const cpu = os.cpus()[0].model;

	const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24);
	const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60;

	const uptimeHours = Math.floor(
		(os.uptime() - uptimeDaysInSeconds) / 60 / 60
	);
	const uptimeHoursInSeconds = uptimeHours * 60 * 60;

	const uptimeMins = Math.floor(
		(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60
	);
	const uptimeMinsInSeconds = uptimeMins * 60;

	const uptimeSecs = Math.floor(
		os.uptime() -
			uptimeDaysInSeconds -
			uptimeHoursInSeconds -
			uptimeMinsInSeconds
	);

	const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`;

	const ramTotal = os.totalmem() / 1024 / 1024 / 1024;
	const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024;
	const ramUsagePercet = Math.round((ramUsage / ramTotal) * 100);

	return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercet };
}

function printLog({
	system,
	arch,
	cpu,
	uptime,
	ramUsage,
	ramTotal,
	ramUsagePercet,
}) {
	console.clear();
	console.log('SYSTEM DETAILS');
	console.log('Operating System: ${system}');
	console.log('Architecture: ${arch}');
	console.log('Processor Model: ${cpu}');
	console.log('System Uptime: ${uptime}');
	console.log(
		`RAM Usage: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(
			2
		)} GB (${ramUsagePercet.toFixed(2)} %)`
	);
}

function saveLog({
	system,
	arch,
	cpu,
	uptime,
	ramUsage,
	ramTotal,
	ramUsagePercet,
}) {
	const logContent = `DETALHES DO SISTEMA \nSistema Operacional: ${system} \nArquitetura: ${arch} \nModelo do Processador: ${cpu} \nTempo de Atividade do Sistema: ${uptime} \nUso de Memória RAM: ${ramUsage.toFixed(
		2
	)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercet.toFixed(
		2
	)} %)\n-----------\n`;

	const logDir = path.join('./', 'log');

	if (!fs.existsSync(logDir)) {
		fs.mkdirSync(logDir);
	}

	const logFilePath = path.join(logDir, 'log.txt');
	fs.appendFileSync(logFilePath, logContent);
}
