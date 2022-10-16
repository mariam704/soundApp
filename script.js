// animation-play-state:
let currentMuisc = 0;
const audio = document.querySelector('#audio');
const musicName = document.querySelector('.music-name');
const bar = document.querySelector('.bar');
const duration = document.querySelector('.duration');
const currentTime = document.querySelector('.current-time');
const playBtn = document.querySelector('.play-btn');
const bacword = document.querySelector('.bacword');
const forword = document.querySelector('.forword');
const dis = document.querySelector('.dis');
playBtn.addEventListener("click", ()=>{
    if(playBtn.className.includes('pause')){
        audio.play();
    }else{
        audio.pause();
    }
    playBtn.classList.toggle('pause');
    dis.classList.toggle('play');
});
const setMuisc =(i) => {
    bar.value=0;
    let song =sounds[i];
    currentMuisc= i ;
    audio.src = song.path;

    musicName.innerHTML = song.name;
    dis.style.backgroundImage  = `Url('${song.cover}')`;
    document.body.style.backgroundImage  = `Url('${song.cover}')`;
    currentTime.innerHTML = '00:00';
  
     setTimeout(() =>{
        bar.max = audio.duration;
        duration.innerHTML= FormTime(audio.duration)
        console.log( audio.duration)
     },3000);

}
setMuisc(0)
const FormTime = (time) =>{
    let min =Math.floor(time / 60)
    if(min<10){
        min = `0${min}`;
    }
    let sec =Math.floor(time % 60);
    if(sec<10){
        sec = `0${sec}`;
    }
    return `${min} :${sec}`
    console.log(min)

}
setInterval(() =>{
    bar.value=audio.currentTime;
    currentTime.innerHTML= FormTime(audio.currentTime);
    if(Math.floor(audio.currentTime) == Math.floor(bar.max)){
        forword.click();
    }
     console.log(bar.value)
},5000);
bar.addEventListener("change", ()=>{
    audio.currentTime = bar.value

})
forword.addEventListener("click", ()=>{
    if(currentMuisc >= sounds.length-1){
        currentMuisc = 0;
    }else{
        currentMuisc++;
    }
    setMuisc(currentMuisc);
    playMuc();

})
bacword.addEventListener("click", ()=>{
    if(currentMuisc <= 0){
        currentMuisc = sounds.length-1;
    }else{
        currentMuisc--;
    }
    setMuisc(currentMuisc);
    playMuc();

})

const playMuc = () =>{
    audio.play();
    playBtn.classList.remove('pause');
    dis.classList.add('play')
}