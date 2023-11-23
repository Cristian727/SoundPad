const pads = document.querySelectorAll(".pad")
console.log(pads)

const audioMap = {};
for(let i = 0; i < pads.length; i++){
    const audioPath = pads[i].getAttribute("data-audio")
    const audio = new Audio(audioPath)
    audioMap[pads[i].innerHTML.toLowerCase()] = audio

    pads[i].addEventListener("click", function(){
      //console.log("pulsaste el pad", pads[i])
      if(audio){
        playAudio(audio)
    }
      console.log("Pulsaste " + pads[i].innerHTML);
      const key = pads[i].innerHTML.toLowerCase();
    //document.querySelector("key").value = key;
        pads[i].style.background = "mediumspringgreen"
        setTimeout(function(){
           pads[i].style.background = "lightgray"
           pads[i].style.boxShadow = "0px 5px 0px lightblue"
        },100)


    })
}

function playAudio(audio){
    audio.pause()
    audio.currentTime = 0;
    audio.play()
}