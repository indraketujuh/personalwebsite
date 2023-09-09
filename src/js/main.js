import Typed from 'typed.js';
import confetti from 'canvas-confetti';

new Typed("#heading", {
    strings: ["Hey there!", "I am architect", "Interior Designer", "And Contractor."],
    typeSpeed: 78,
    backSpeed: 98,
    cursorChar: "_",
    loop: true,
  });

  const form = document.getElementById("form");

  form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const myCanvas = document.createElement("canvas");
        document.body.appendChild(myCanvas);
        confetti.create(myCanvas, {
            resize: true,
            useWorker: true,
        });
        confetti({
            particleCount:500,
            spread:500,
        });
        myCanvas.remove();
    }
  });