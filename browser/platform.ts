/** * 是否为 mac 系统（包含 iphone 手机） * */
export const isMac: boolean = (() =>
  /macintosh|mac os x/i.test(navigator.userAgent))();

/** * 是否为 windows 系统 * */
export const isWindows: boolean = (() =>
  /windows|win32/i.test(navigator.userAgent))();

/** * 是否为 iphone 手机 * */
export const isIphone: boolean = (() =>
  /iPhone\sOS/i.test(navigator.userAgent))();

/** * 是否为 ipad * */
export const isIpad: boolean = (() =>
  /(iPad).*OS\s([\d_]+)/.test(navigator.userAgent))();

/** * 是否为 Android 系统 * */
export const isAndroid: boolean = (() =>
  /(Android)\s+([\d.]+)/.test(navigator.userAgent))();

/** * 是否为 移动终端 * */
export const isMobile: () => boolean = () => {
  const agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ]; // 只考虑常见终端系统
  let flag = false;
  for (let v = 0; v < agents.length; v += 1) {
    if (navigator.userAgent.indexOf(agents[v]) >= 0) {
      flag = true;
      break;
    }
  }
  return flag;
};
