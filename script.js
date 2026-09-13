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

document.addEventListener("DOMContentLoaded", () => {

    const codes = {
        "GAME": "task1.html",
        "DATE": "task2.html",
        "BIRTHDAY": "task3.html"
    };

    const submitBtn = document.getElementById("submitBtn");
    const codeInput = document.getElementById("codeInput");
    const message = document.getElementById("message");
    const progressFill = document.getElementById("progressFill");
    const successSound = document.getElementById("successSound");
    const errorSound = document.getElementById("errorSound");

    let lives = 3;
    let progress = 0;

    function spawnParticles() {
        for (let i = 0; i < 20; i++) {
            const p = document.createElement("div");
            p.classList.add("particle");
            p.style.left = Math.random() * window.innerWidth + "px";
            p.style.top = Math.random() * window.innerHeight + "px";
            document.getElementById("particles").appendChild(p);
            setTimeout(() => p.remove(), 1000);
        }
    }

    submitBtn.addEventListener("click", () => {
        const userInput = codeInput.value.trim();

        if (codes[userInput]) {
            message.textContent = "Congrats! Let's go!";
            successSound.play();
            spawnParticles();

            progress += 33;
            progressFill.style.width = progress + "%";

            setTimeout(() => {
                window.location.href = codes[userInput];
            }, 1500);

        } else {
            message.textContent = "Try again...";
            errorSound.play();

            submitBtn.classList.add("shake");
            setTimeout(() => submitBtn.classList.remove("shake"), 400);

            lives--;
            document.querySelector(".lives").textContent = "❤️".repeat(lives);

            if (lives === 0) {
                message.textContent = "Game Over 💀";
                codeInput.disabled = true;
                submitBtn.disabled = true;
            }
        }
    });
});

document.getElementById("resetBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

