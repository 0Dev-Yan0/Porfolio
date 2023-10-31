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
        theme_text.innerText = "Light mode On";
    } else {
        console.log("Goodbye World");
        theme_text.innerText = "Light mode Off";
    }
});

//! Utilização da biblioteca typed.js aqui;
var options = {
    strings: ["Ae porra está funcinando yippe!", "Segunda frase escrita por que sim", "E uma terceira ainda"],
    typeSpeed: 40, //! Velocidade de escrever;
    backSpeed: 20, //! Velocidade de deletado;
    loop: true, //! Loop verdadeiro ou falso;
    showCursor: false, //! Mostrar ou não o cursor "a barra no final da frase", verdadeiro ou falo para aplicar;
    // fadeOut: true, //! Ao invés de deletar ele apaga, verdadeiro ou falso para aplicar;
    // fadeOutClass: 'typed-fade-out', //! Estilo de como vai ser apagado;
    // fadeOutDelay: 500, //! Delay em milisegundo para ele começar a ser apagado;
    // loopCount: Infinity, //! Quantidade de loops, se houver;
    // cursorChar: '|', //! Qual vai ser o caractere do cursor;
    // backDelay: 500, //! Delay para começar a deletar o texto após ele ser escrito;
    // startDelay: 2000, //! Delay para começar a escrever o texto;
};
var options2 = {
    strings: ["Testando novamente só para ver mesmo", "Miau vezes mil", "Seila cansei"],
    typeSpeed: 40,
    backSpeed: 20,
    loop: false
};
  
var typed = new Typed("#titulo", options);
// var typed2 = new Typed("#teste", options2);
