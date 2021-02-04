const os = require("os");

function getNetworkIp() {
  let needHost = "";
  try {
    const network = os.networkInterfaces();
    for (const dev in network) {
      const iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        ) {
          needHost = alias.address;
        }
      }
    }
  } catch (e) {
    needHost = "localhost";
  }
  return needHost;
}
module.exports = getNetworkIp;
