let Speech = new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect = document.querySelector("select");

voiceSelect.addEventListener('change', (event) => {
    console.log(event.target.value)
    voices=window.speechSynthesis.getVoices();
    Speech.voice=voices[event.target.value];
})

window.speechSynthesis.onvoiceschanged = ()=>{
    voices=window.speechSynthesis.getVoices();
    Speech.voice=voices[voiceSelect.selectedIndex];
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)));
};
document.querySelector("button").addEventListener('click',()=>{
    Speech.text =document.querySelector("textarea").value;
    window.speechSynthesis.speak(Speech);
});
 