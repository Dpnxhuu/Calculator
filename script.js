const input = document.getElementById("input");
const buttons = document.querySelector(".btns");

let expression = "";

const map = {
  "×": "*",
  "÷": "/",
  "+/-": "-",
};

buttons.addEventListener("pointerdown", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  e.preventDefault();

  const uiValue = btn.textContent.trim();
  const value = map[uiValue] || uiValue;

  if (uiValue === "AC") {
    expression = "";
    input.value = "";
    adjustFontSize();
    return;
  }

  if (btn.classList.contains("backspace")) {
    expression = expression.slice(0, -1);
    input.value = expression || "";
    adjustFontSize();
    return;
  }

  if (uiValue === "+/-") {
    if (expression === "") return;

    else if (expression.startsWith("-"))
    expression = expression.slice(1); // - hatao

    else expression = "-" + expression; // start me - add

    input.value = expression.replace(/\*/g, "×").replace(/\//g, "÷");
    return;
  }

  if (uiValue === "=") {
    if (!expression) return;

    if (/[+\-*/.]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    try {
      const Result = eval(expression);
      expression = Result.toString();
      input.value = expression;
      adjustFontSize();
    } catch {
      input.value = "Error";
      expression = "";
    }
    return;
  }

  //If First char is operator then ---> return;
  if (/^[+\-*/%]$/.test(value) && expression === "") return;

  //Dot fix
  if (value === ".") {
    const digits = expression.split(/[+\-*/%]/).pop();
    if (digits.includes(".")) return;
    if (expression === "") expression += 0;
  }

  //Operator replace
  const lastChar = expression.slice(-1);
  if ("+-*/%".includes(value) && "+-*/%".includes(lastChar)) {
    expression = expression.slice(0, -1);
  }

  //ZERO FIX
  if (expression === "0" && /[0-9]/.test(value)) {
    expression = value; // 0 → 1 (not 01)
  } else {
    expression += value;
  }

  // DISPLAY
  input.value = expression.replace(/\*/g, "×").replace(/\//g, "÷");
  adjustFontSize();
});

function adjustFontSize() {
  const length = input.value.length;

  if (length > 6 && length <= 13) {
    input.style.fontSize = "40px";
  } else if (length > 13) {
    input.style.fontSize = "24px";
  } else {
    input.style.fontSize = "64px";
  }
}
