const result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    result.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
