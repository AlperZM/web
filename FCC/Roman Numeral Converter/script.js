const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

function checkNumber() {
  output.textContent = "";
  output.className = "";
  let val = input.value;

  if (val === "") {
    output.textContent = "Please enter a valid number";
    output.className = "warning";
  } else if (val <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.className = "warning";
  } else if (val > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.className = "warning";
  } else {
    val = Number(val);
    const result = [];
    romanNumerals.forEach(function (arr) {
      while (val >= arr[1]) {
        result.push(arr[0]);
        val -= arr[1];
      }
    });
    output.textContent = result.join("");
    output.className = "accepted";
  }
  input.value = "";
  input.focus();
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkNumber();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkNumber();
});
