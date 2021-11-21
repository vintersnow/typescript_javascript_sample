
// Load variable from window(global) space
// Declear in "public/another_script.js"
export function shim(name: string): any {
  let global: any = window;
  return global[name];
}

let doubleValue = undefined
// wait untile script has loaded and added to the global space
function waitUntileLoad() {
  const timer = setTimeout(() => {
    if (typeof (shim('doubleValue')) === 'undefined') {
      console.log("need to wait");
      waitUntileLoad()
    } else {
      doubleValue = shim("doubleValue");
      afterLoaded()
    }
  }, 50);
}

function afterLoaded() {
  console.log(doubleValue);
  console.log("another", doubleValue(10));
  alert(doubleValue(10));
}

export function run2() {
  waitUntileLoad()
}
