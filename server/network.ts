import * as os from "os";

/**
 * get ip addresses of current machine
 * @return {string[]} ipList, eg( [ '10.1.1.144', '172.16.14.2' ] )
 */
export function getIPList(): string[] {
  const interfaces = os.networkInterfaces();
  let addresses: string[] = [];
  for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
      let address = interfaces[k][k2];
      if (address.family === "IPv4" && !address.internal) {
        addresses.push(address.address);
      }
    }
  }
  return addresses;
}
