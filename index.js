const play =document.getElementById("play");
const music =document.querySelector("#audio");
const imag=document.querySelector("#img");
const forwards=document.querySelector("#forward");
const backwards=document.querySelector("#backward");
const titles=document.querySelector(".title");
const artists=document.querySelector(".artist");
const songs=[
    {title:"tere fitoor",
    artist:"enimem",
    img:"img1.jpg",
    song:"rahul1.mp3"

    },
    {title:"sappheird",
    artist:"cristina anguilera",
    img:"img2.jpg",
    song:"rahul2.mp3"

    },
    {title:"walking firri",
    artist:"lynn anderson",
    img:"img3.jpg",
    song:"rahul3.mp3"

    },
    {title:"tere sang",
    artist:"john mayer",
    img:"img4.jpg",
    song:"rahul4.mp3"

    },
    {title:"yariyaa",
    artist:"eddy arnold",
    img:"img5.jpg",
    song:"rahul5.mp3"

    },
]

const songplay=(songs)=>{
    titles.textContent=songs.title;
    artists.textContent=songs.artist;
    imag.src=songs.img;
    music.src=songs.song;
}

let songindex=0
forwards.addEventListener("click",()=>{
    songindex=(songindex+1)%songs.length;
    songplay(songs[songindex]);
    music.play();
})
backwards.addEventListener("click",()=>{
    songindex=(songindex-1+songs.length)%songs.length;
    songplay(songs[songindex]);
    music.play();
});

 let isplaying=false;
const playmusic=()=>{
music.play();
isplaying=true
play.classList.replace("fa-play","fa-pause" );
imag.classList.add("animate");
}

const pausemusic=()=>{
    music.pause();
    isplaying=false
    play.classList.replace("fa-pause","fa-play" );
    imag.classList.remove("animate");
    }
    






play.addEventListener("click",()=>{
    if(isplaying){
        pausemusic();
    }
    else{
        playmusic();
    }
});