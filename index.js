const instanceCPUs = require("os").cpus();
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log(`MASTER thread process id => ${process.pid}`);
} else {
  console.log(`WORKER thread process id => ${process.pid}`);
}
