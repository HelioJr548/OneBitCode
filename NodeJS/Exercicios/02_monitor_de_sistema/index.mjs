import { getSystemInfo, printLog, saveLog } from './monitor.mjs';

setInterval(() => {
	const systemInfo = getSystemInfo();
	printLog(systemInfo);
	saveLog(systemInfo);
}, 1000);
