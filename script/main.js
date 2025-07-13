

const result = document.getElementById("result");
function appendValue(value) {
  result.value += value;
}

function calculate() {
  try {
    result.value = eval(result.value.replace(/x/g, '*'));
  } catch {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = "";
}

document.querySelectorAll("button").forEach((button) => {
  const match = button.id.match(/btn\('(.*)'\)/);
  if (match) {
    const value = match[1];

    if (value === "AC") {
      button.addEventListener("click", clearResult);
    } else if (value === "=") {
      button.addEventListener("click", calculate);
    } else if (value === "") {
    } else {
      button.addEventListener("click", () => appendValue(value));
    }
  }
});