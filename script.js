const button = document.getElementById("icon-con")
const adviceId = document.getElementById("id")
const advice = document.getElementById("advice")

window.onload = loadQuote;

function loadQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => data.slip)
    .then(data => {
        adviceId.textContent = data.id
        advice.textContent = data.advice})
}

button.addEventListener("click", loadQuote);