const switchThemeButton = document.querySelector(".switch");
const body = document.querySelector('body');
const buttons = document.querySelectorAll(".calc_button-row-btn");
const display = document.querySelector(".calc_display span");

let theme = 1;

// Set click events to buttons
buttons.forEach((elemnt) => {
  elemnt.addEventListener("click", (e) => {
    try {
      let { target } = e;
      if (target.id == "del") {
        display.innerHTML = display.innerHTML.slice(
          0,
          display.innerHTML.length - 1
        );
      } else if (target.id == "reset") {
        display.innerHTML = "";
      } else if (target.id == "eq") {
        if(display.innerHTML != '')
        display.innerHTML = eval(display.innerHTML);
      } else {
        let char = target.innerHTML == "x" ? "*" : target.innerHTML;
        display.innerHTML += char;
      }
    } catch {

    }
  });
});

// Cahnge theme when switch theme button clicked
switchThemeButton.addEventListener("click", () => {
  switchThemeButton.classList.remove("t2");
  switchThemeButton.classList.remove("t3");

  body.classList.remove("t2");
  body.classList.remove("t3");

  theme++;
  switch (theme) {
    case 2:
      switchThemeButton.classList.add("t2");
      body.classList.add("t2");
      break;
    case 3:
      switchThemeButton.classList.add("t3");
      body.classList.add("t3");
      break;
    default:
      theme = theme > 3 ? 1 : theme;
      break;
  }
});
