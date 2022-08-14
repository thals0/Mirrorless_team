/* custom sub페이지 +, - 누르면 증감되도록 하기*/
// + 누르면 1 증가
let cost = document.querySelector(".cost");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let result = document.querySelector("#result");
let totalcost = document.querySelector(".totalcost");
let i = 1;

const price = parseInt(cost.textContent);

plus.addEventListener("click", () => {
  i++;
  result.textContent = i;
  let totalcostNum = i * price;
  totalcost.textContent = "₩" + totalcostNum.toLocaleString();
});

minus.addEventListener("click", () => {
  if (i > 0) {
    i--;
    result.textContent = i;
    let totalcostNum = i * price;
    totalcost.textContent = "₩" + totalcostNum.toLocaleString();
  } else {
    totalcost.textContent = "₩" + 0;
  }
});
