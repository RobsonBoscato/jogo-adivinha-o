const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const randomNumber = Math.round(Math.random() * 10);

let Attempts = 1;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.querySelector('keydown', function (event) {
  if (event.key == 'Enter') {
    handleResetClick();
  }
});

function handleTryClick(event) {
  event.preventDefault(); // evitar a execução padrão do .form (envio e reload)

  const inputNumber = document.querySelector('#numberField');

  numberCheck(inputNumber.value);
  inputNumber.value = '';
  inputNumber.focus();
}

function numberCheck(numberAttempt) {
  if (numberAttempt < 0 || numberAttempt > 10) {
    alert('[ERRO] Número inválido.');
  }
  if (numberAttempt == randomNumber) {
    toggleScreen();

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Você acertou em ${Attempts} tentativas.`;
  }
  Attempts++;
}

function handleResetClick() {
  toggleScreen();
  Attempts = 1;
  location.reload();
}

function toggleScreen() {
  screen1.classList.toggle('hidden');
  screen2.classList.toggle('hidden');
}
