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
    alert("Sorry, your browser doesn't support text to speech!");
  } else {
    const sentences = text.split(new RegExp('[.!?]'));
    for(let i = 0; i < sentences.length; i+=1){
        const sentence = sentences[i];
        const toSpeak = new SpeechSynthesisUtterance(sentence);
        voices.forEach((voice) => {
            if (voice.name === 'Google UK English Female') {
                toSpeak.voice = voice;
            }
        });
        // toSpeak.onstart = () => console.log(toSpeak.text);
        speechSynthesis.speak(toSpeak);
    }
  }
};