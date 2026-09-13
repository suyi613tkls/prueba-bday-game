document.addEventListener("DOMContentLoaded", () => {

    const crossword = [
        ["C","A","K","E","","",""],
        ["","","","L","","",""],
        ["G","A","M","E","","",""],
        ["","","","","","",""],
        ["","","","","","",""],
        ["","","","","","",""],
        ["","","","","","",""]
    ];

    const container = document.getElementById("crossword");

    crossword.forEach(row => {
        row.forEach(letter => {
            const cell = document.createElement("input");

            if (letter === "") {
                cell.classList.add("block");
                cell.disabled = true;
            } else {
                cell.classList.add("cell");
                cell.maxLength = 1;
                cell.dataset.solution = letter;
            }

            container.appendChild(cell);
        });
    });

    document.getElementById("checkBtn").addEventListener("click", () => {
        const cells = document.querySelectorAll(".cell");
        let correct = true;

        cells.forEach(c => {
            if (c.value.toUpperCase() !== c.dataset.solution) {
                correct = false;
                c.style.borderColor = "red";
            } else {
                c.style.borderColor = "#6a0dad";
            }
        });

        const result = document.getElementById("result");

        if (correct) {
            result.textContent = "¡Perfecto! Has completado el crucigrama 🎉";
            setTimeout(() => {
                window.location.href = "final.html"; // tu página final
            }, 2000);
        } else {
            result.textContent = "Hay errores, revisa las letras ❌";
        }
    });

});
