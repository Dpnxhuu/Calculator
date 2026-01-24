const input = document.getElementById("input");

const operators = ["+", "-", "*", "/", "%", "=", "."];
function press(val) {
  if (input.value === "" && operators.includes(val)) {
    return;
  }

  const lastChar = input.value.slice(-1);

  if (operators.includes(lastChar) && operators.includes(val)) {
    return;
  } else if (val === "." && input.value.includes(val)) {
    return;
  } else if (input.value === "0" && val === "0") {
    return;
  } else if (input.value === "0" && !operators.includes(val)) {
    input.value = val;
    return;
  } else {
    input.value += val;
    if (input.value.length > 6) {
      input.style.fontSize = "40px";
      if (input.value.length >= 13) {
        input.style.fontSize = "24px";
      }
    }
  }
}

function equal(val) {
  if (val === "AC") {
    input.value = "";
    input.style.fontSize = "70px";
  } else if (val === "backspace") {
    input.value = input.value.slice(0, -1);
    if (input.value.length < 13) {
      input.style.fontSize = "40px";
      if (input.value.length < 7) {
        input.style.fontSize = "70px";
      }
    }
  } else if (val === "equal") {
    if (input.value === "") {
      return;
    } else {
      input.value = eval(input.value);
    }
  } else if (val === "-" && input.value[0] !== "-") {
    input.value = "-" + input.value;
  }
}
