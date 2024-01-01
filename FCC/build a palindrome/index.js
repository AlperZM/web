const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
const p = document.createElement("p");
let val = "";

let palindrome = (e) => {
  let userInput = e;


  if (e === "") {
    alert('Please input a value');
    return;
  };
  result.replaceChildren();

  let controlStr = e.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let outputStr = `${userInput} ${
    controlStr === [...controlStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  p.textContent = outputStr;
  result.appendChild(p);

}

btn.addEventListener("click", () => {
  palindrome(input.value);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    palindrome(input.value);
    input.value = "";
  }
})
