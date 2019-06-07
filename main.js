// http://websamuraj.pl/examples/js/projekt11/
let btnStart = document.querySelector(".main");
let btnReset = document.querySelector(".reset");
let panel = document.querySelector(".time div")
let btnStartPauza = false;
let time = 0;
let idInterwal;

const startCouting = () => {

    console.log("działa po kliknięciu w start ")

    if (!btnStartPauza) {
        btnStartPauza = !btnStartPauza;
        btnStart.textContent = 'Pauza';
        idInterwal = setInterval(start, 10);

    } else {
        btnStartPauza = !btnStartPauza;
        btnStart.textContent = 'Start';
        clearInterval(idInterwal);
    }

}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}
const reset = () => {
    time = 0;
    panel.textContent = '---';
    clearInterval(idInterwal);
    btnStart.textContent = "Start";
    buttonStartPauza = false;
}

btnStart.addEventListener('click', startCouting);
btnReset.addEventListener('click', reset);