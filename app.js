const saldo = document.getElementById("saldo");

let amount = 125000;

setInterval(() => {

saldo.style.opacity = "0.5";

setTimeout(() => {
saldo.innerText =
"Rp " + amount.toLocaleString("id-ID");
saldo.style.opacity = "1";
}, 300);

}, 5000);
