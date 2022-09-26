const url = "https://brasilapi.com.br/api/banks/v1";
const button = document.querySelector("#btn");
const btn2 = document.querySelector(".clear");
const container = document.querySelector("#container");

async function getData() {
  const response = await fetch(url);
  const banks = await response.json();
  console.log(banks);
  container.hidden = false;

  const brazillianBanks = banks.map((bank) => {
    return `
     
        <h2>${bank.name}</h2>
        <p>Código: ${bank.code}</p>
        <span>${bank.fullName}</span>
  

    `;
  });
  container.innerHTML = brazillianBanks.join("");
}
function clear() {
  container.hidden = true;
}
button.addEventListener("click", () => getData());
btn2.addEventListener("click", () => clear());
