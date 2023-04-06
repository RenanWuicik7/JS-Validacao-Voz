window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak);

const elementoChute = document.getElementById('chute');

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValidacaoNumeral();
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você Disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());

function reiniciarJogo() {
    window.location.reload();
}