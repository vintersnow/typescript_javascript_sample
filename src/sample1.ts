// Import js and run
import { showAlert } from "./sample.js";


export function run1() {
  const app = document.getElementById("app");

  let btn = document.createElement("button");
  btn.innerHTML = "show alert";
  btn.onclick = () => {
    showAlert("Alert!!");
  };
  app.appendChild(btn);

}
