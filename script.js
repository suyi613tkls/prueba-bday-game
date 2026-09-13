// Maping the codes
const codes = {
    "GAME": "task1.html",    // First code to 1task.html
    "DATE": "task2.html",    // Second code to 2task.html
    "BIRTHDAY": "task3.html"
};

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const userInput = codeInput.value.trim();
    if (codes[userInput]) {
        message.textContent = "Congrats! Let's go!";
        setTimeout(() => {
            window.location.href = codes[userInput];
        }, 2000);
    } else {
        message.textContent = "Try again...";
    }
});