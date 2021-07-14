const synth = window.speechSynthesis
let voices = []

const populateVoices = () => {
	if(synth && synth.getVoices) voices = synth.getVoices()
}

populateVoices()

if(synth !== undefined) synth.onvoiceschanged = populateVoices

const readSentences = (sentences) => {
	for(let i = 0; i < sentences.length; i+=1){
		const sentence = sentences[i]
		const toSpeak = new SpeechSynthesisUtterance(sentence)
		voices.forEach((voice) => {
			if(voice.name === 'Google UK English Female'){
				toSpeak.voice = voice
			}
		})
		synth.speak(toSpeak)
	}
}