const checkbox = document.getElementById("checkbox");
const theme_text = document.getElementById("theme_text");
const translate = document.getElementById("translate");

translate.addEventListener("click", (event) => {
    const elemento = event.target;
    if (elemento.innerText === "En") {
        elemento.innerText = "Pt-Br";
    } else {
        elemento.innerText = "En";
    }
});

checkbox.addEventListener("change", (evento) => {
    if (evento.target.checked) {
        console.log("Hello World");
        theme_text.innerText = "light mode";
    } else {
        console.log("Goodbye World");
        theme_text.innerText = "dark mode";
    }
});