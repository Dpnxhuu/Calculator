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
      }

      change(input.value.length);
    }

    function equal(val) {
      if (val === "AC") {
        input.value = "";
        change(0);
      } else if (val === "backspace") {
        input.value = input.value.slice(0, -1);
        change(input.value.length);
      } else if (val === "-") {
        
        if(input.value[0] === '-')
      {
        input.value = input.value*-1;
      }
      else{
        input.value = -1 * input.value;
      }

      }
    }

    document.getElementById("equal").addEventListener("click", function () {
      const lastChar = input.value.slice(-1);

      if (input.value === "") {
        return;
      } else if (operators.includes(lastChar)) {
        input.value = input.value.slice(0, -1);
      } else {
        input.value = eval(input.value);
      }
      change(input.value.length);
    });

    function change(length) {
      if (length > 6 && length <= 13) {
        input.style.fontSize = "40px";
      } else if (length > 13) {
        input.style.fontSize = "24px";
      } else {
        input.style.fontSize = "70px";
      }
    }