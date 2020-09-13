const synth = window.speechSynthesis;
let voices = [];

function PopulateVoices() {
  voices = synth.getVoices();
}
PopulateVoices();

if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}

export default (text) => {
  if (speechSynthesis === undefined) {
    //   eslint-disable-next-line
    alert("Sorry, your browser doesn't support text to speech!");
  } else {
    const toSpeak = new SpeechSynthesisUtterance(text);
    voices.forEach((voice) => {
      if (voice.name === 'Google UK English Female') {
        toSpeak.voice = voice;
      }
    });
    synth.cancel();
    synth.speak(toSpeak);
  }
};
