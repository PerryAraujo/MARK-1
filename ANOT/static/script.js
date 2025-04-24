function iniciar() {
  const output = document.getElementById("resultado");
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'pt-BR';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let texto = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      texto += event.results[i][0].transcript;
    }
    output.innerText = texto;

    // Envia pro servidor (salvando)
    fetch('/salvar', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ texto })
    });
  };

  recognition.start();
}
