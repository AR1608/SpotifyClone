console.log("Welocome to Spotify");
// initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('song-item'));

let songs=[
    {songName:"295" , filePath:"songs/1.mp3.mp3" , coverPath:"covers/1.jpeg"},
    {songName:"Goat" , filePath:"songs/2.mp3.mp3" , coverPath:"covers/2.jpeg"},
    {songName:"Kamlee" , filePath:"songs/3.mp3.mp3" , coverPath:"covers/3.jpeg"},
    {songName:"Levels" , filePath:"songs/4.mp3.mp3" , coverPath:"covers/4.jpeg"},
    {songName:"White Brown Black" , filePath:"songs/5.mp3.mp3" , coverPath:"covers/5.jpeg"},
    {songName:"Try me" , filePath:"songs/6.mp3.mp3" , coverPath:"covers/6.jpg"},
    {songName:"They Know" , filePath:"songs/7.mp3.mp3" , coverPath:"covers/7.jpeg"},
    {songName:"You" , filePath:"songs/8.mp3.mp3" , coverPath:"covers/8.jpg"},
]
songItems.forEach((element,i )=> {
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
});






// handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{

//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    
        
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
            
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
       
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3.mp3`;
       
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=1;
    }
    else{
songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=1;
    }
    else{
songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})
songItems.getElementsByClassName('timeStamp').addEventListener('change',()=>{
    for(var i=0;i<=8;i++){
        timeStamp(i).innerText=audioElement(i).duration;
    }
})