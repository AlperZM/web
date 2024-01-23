const input = document.getElementById("user-input");
const btn = document.getElementById("check-btn");
const reset = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

btn.addEventListener("click", control);
reset.addEventListener("click", clear);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    control()
  }
});

function control() {
  let para = document.createElement("p");

  const regex = new RegExp(`^(1\\s?)?(\\([0-9]{3}\\)|[0-9]{3})[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$`);
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  } else if (regex.test(input.value)) {
    para.textContent = `Valid US number: ${input.value}`;
    para.className = "valid";
    result.appendChild(para);
  } else {
    para.textContent = `Invalid US number: ${input.value}`;
    para.className = "invalid";
    result.appendChild(para);
  }
  input.value = "";
}

function clear() {
  result.textContent = "";
  input.value = "";
}
