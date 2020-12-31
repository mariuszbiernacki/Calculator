const EL_DISP = document.querySelector("[data-name='display']");
const EL_AAC = document.querySelector("[data-name='ac']");
const EL_SUM = document.querySelector("[data-name='equal']");

const CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "+", "-", "x", "/"];

let numberRange = "";

const calculator = () => {
  for (let char of CHARS) {
    const button = document.getElementById(char);

    button.addEventListener("click", () => {
      if (typeof char === "number") {
        if (
          EL_DISP.innerText === "0" ||
          EL_DISP.innerText === "+" ||
          EL_DISP.innerText === "-" ||
          EL_DISP.innerText === "x" ||
          EL_DISP.innerText === "/"
        ) {
          EL_DISP.innerText = button.innerText;
        } else {
          EL_DISP.innerText += button.innerText;
        }
        numberRange = numberRange.concat(button.innerText);
      } else {
        EL_DISP.innerText = button.innerText;
        if (button.innerText === "x") {
          numberRange += "*";
        } else {
          numberRange += button.innerText;
        }
      }
    });
  }
};

EL_AAC.addEventListener("click", () => {
  EL_DISP.innerText = "0";
  numberRange = "";
});

EL_SUM.addEventListener("click", () => {
  numberRange = eval(numberRange).toString();
  EL_DISP.innerText = numberRange;
});

calculator();
