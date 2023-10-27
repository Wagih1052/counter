let count = 0;
let countElement = document.getElementById("count");
let buttons = document.querySelector(".btns");

buttons.addEventListener('click', (e) => {
    let currentButtonClasses = e.target.parentNode.classList;
    if (currentButtonClasses.contains("inc")) {
        count++;
    } else if (currentButtonClasses.contains("dec")) {
        count--;
    } else {
        count = 0
    }
    if (count > 0) {
        countElement.style.color = "green"
    } else if (count < 0) {
        countElement.style.color = "green"
    } else {
        countElement.style.color = "black"
    }
    countElement.textContent = count;
})
