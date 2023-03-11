// calculate budget
budget();
spended();

function budget() {
  let btn = document.querySelector("#income-submit");

  btn.onclick = () => {
    let val = Number(document.getElementById("income-input").value);
    let m1 = document.querySelector(".m1");
    let money = Number(m1.textContent);
    money += val;
    m1.textContent = money;
    document.getElementById("income-input").value = "";
  };
}

function spended() {
  let btn = document.querySelector("#spend-submit");

  btn.addEventListener("click", () => {
    let m1 = document.querySelector(".m1");
    let money = Number(m1.textContent);
    let paids = document.querySelector(".m2");
    let topPaids = Number(paids.textContent);
    let balance = document.querySelector(".m3");
    let netMoney = Number(balance.value);

    let ol = document.querySelector("ol");
    let li = document.createElement("li");
    let spendInput = document.querySelector("#spend-amount");
    let spendVal = Number(spendInput.value);

    let spendId = document.querySelector("#spend-name");
    let spendName = spendId.value;
    let button = `<button class="del" onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);">del</buttton>`;

    li.innerHTML = `<div class="row"><span class="payment">${spendVal}</span> <span>${spendName}</span> <span>${button}</span>`;
    ol.appendChild(li);

    spendInput.value = "";
    spendId.value = "";
    //payments

    topPaids += spendVal;
    paids.textContent = topPaids;
    //balance
    netMoney = money - topPaids;
    balance.textContent = Number(netMoney);

    let amounts = document.getElementsByClassName("payment");
    let buttons = document.getElementsByClassName("del");
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener("click", function (e) {
        let less = Number(
          e.target.parentElement.parentNode.textContent.split(" ")[0]
        );
        balance.textContent = Number(netMoney + less);
        netMoney = Number(balance.textContent);
        paids.textContent = Number(topPaids - less);
        topPaids = Number(paids.textContent);
      });
    }
  });
}
