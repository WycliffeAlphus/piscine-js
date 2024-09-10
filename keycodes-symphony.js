export function compose() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let body = document.querySelector("body");
  onkeydown = (event) => {
    let key = event.key;
    if (letters.includes(key)) {
      let div = document.createElement("div");
      div.textContent = key;
      div.className = "note";
      let colorValue = (255 / 26) * (event.key.charCodeAt(0) - 97);
      div.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      body.append(div);
    } else if (key === "Backspace") {
      const divs = document.querySelectorAll("div");
      body.removeChild(divs[divs.length - 1]);
    } else {
      if (key === "Escape") {
        body.innerHTML = "";
      }
    }
  };
}
