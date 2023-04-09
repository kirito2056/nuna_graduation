function speak() {
    const message = document.getElementById('input-text').value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'ko-KR';
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }