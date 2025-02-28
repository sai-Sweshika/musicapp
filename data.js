const data = [
    {
        id: "1",
        Image: "./images/Adigaa.jpeg",
        title: "Adigaa",
        singers: "Karthik",
        song: "./Songs/Adigaa.mp3",
    },
    {
        id: "2",
        Image: "./images/Amaran.jpeg",
        title: "Hey Rangule",
        singers: "G.v.Prakesh, Ramya Behara",
        song: "./Songs/Hey Rangule.mp3",
    },
    {
        id: "3",
        Image: "./images/Chuttamalle.jpeg",
        title: "Chuttamalle",
        singers: "Shilpa Rao, Anirudh Ravichander",
        song: "./Songs/Chuttamalle.mp3",
    },
    {
        id: "4",
        Image: "./images/Devara.jpeg",
        title: " Devara Song",
        singers: "Ravichander",
        song: "./Songs/DevaraTheme.mp3",
    },
    {
        id: "5",
        Image: "./images/gajju bomma.jpeg",
        title: "Gaaju Bomma",
        singers: "Hesham Abdul Wahab",
        song: "./Songs/Gaaju Bomma.mp3",
    },
    {
        id: "6",
        Image: "./images/orange.jpeg",
        title: "Nenu Nuvvantu",
        singers: "Karthik",
        song: "./Songs/Nenu Nuvvantu.mp3",
    },
    {
        id: "7",
        Image: "./images/Hanuman.jpeg",
        title: "Hanuman",
        singers: "GowarHari, Saicharan Bhaskaruni",
        song: "./Songs/Hanuman Chalisa.mp3",
    },
    {
        id: "8",
        Image: "./images/orange.jpeg",
        title: "Chilipiga chustav",
        singers: "Karthik",
        song: "./Songs/Chilipa.mp3",
    },
    {
        id: "9",
        Image: "./images/pushpa.jpeg",
        title: "Pushpa Pushpa",
        singers: "Devi Sri Prasad",
        song: "./Songs/PushpaPushpaa.mp3",
    },
    {
        id: "10",
        Image: "./images/Radhe Radhe.jpeg",
        title: "Radhe Radhe",
        singers: "Mangli",
        song: "./Songs/Radhe Krishna Radhe.mp3",
    },
    {
        id: "11",
        Image: "./images/RRR.jpeg",
        title: "Dosti",
        singers: "Hemachandra",
        song: "./Songs/rrrsong.mp3",
    },
    {
        id: "12",
        Image: "./images/Sooskei.jpeg",
        title: "Sooskei",
        singers: "Devi Sri Prasad",
        song: "./Songs/Sooseki.mp3",
    },
];

const songsContainer = document.getElementById("songsContainer");

function pauseAllAudios() {
    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; 
    });

    const allIcons = document.querySelectorAll(".playPause i");
    allIcons.forEach(icon => {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    });
}

data.forEach((song) => {
    let card = document.createElement("div");
    card.classList.add("song-card");

    card.innerHTML = `
        <img src="${song.Image}" alt="${song.title}" class="song-image">
        <h2>${song.title}</h2>
        <p>${song.singers}</p>
        <audio src="${song.song}" id="audio${song.id}" preload="auto"></audio>
        <div class="playpausebuttons">
            <div>
                 <i class="fa-solid fa-backward-step prevIcon"></i>
            </div>
            <div class="playPause">
                 <i class="fa-solid fa-play" id="cntrlIcon${song.id}"></i>
            </div>
            <div>
                 <i class="fa-solid fa-forward-step nextIcon"></i>
            </div>
        </div
    `;

    songsContainer.append(card);

    const playPauseIcon = card.querySelector(".playPause");
    playPauseIcon.addEventListener("click", () => {
        const audio = card.querySelector("audio");
        const controlIcon = playPauseIcon.querySelector("i");

        if (audio.paused) {
            pauseAllAudios();
            audio.play();
            controlIcon.classList.remove("fa-play");
            controlIcon.classList.add("fa-pause");
        } else {
            audio.pause();
            controlIcon.classList.remove("fa-pause");
            controlIcon.classList.add("fa-play");
        }
    });
    const nextIcon = card.querySelector(".nextIcon");
    const prevIcon = card.querySelector(".prevIcon");

    nextIcon.addEventListener("click", () => {
        let nextCard = card.nextElementSibling || songsContainer.firstElementChild;
        const nextAudio = nextCard.querySelector("audio");
        const playButton = nextCard.querySelector(".playPause i");

        pauseAllAudios();
        nextAudio.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
    });

    prevIcon.addEventListener("click", () => {
        let prevCard = card.previousElementSibling || songsContainer.lastElementChild;
        const prevAudio = prevCard.querySelector("audio");
        const playButton = prevCard.querySelector(".playPause i");

        pauseAllAudios();
        prevAudio.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
    });
});





























// const data = [
//     {
//         id: "1",
//         Image: "./images/Adigaa.jpeg",
//         title: "Adigaa",
//         singers: "Karthik",
//         song: "./Songs/Adigaa.mp3",
//     },
//     {
//         id: "2",
//         Image: "./images/Amaran.jpeg",
//         title: "Hey Rangule",
//         singers: "G.v.Prakesh, Ramya Behara",
//         song: "./Songs/Hey Rangule.mp3",
//     },
//     {
//         id: "3",
//         Image: "./images/Chuttamalle.jpeg",
//         title: "Chuttamalle",
//         singers: "Shilpa Rao, Anirudh Ravichander",
//         song: "./Songs/Chuttamalle.mp3",
//     },
//     {
//         id: "5",
//         Image: "./images/gajju bomma.jpeg",
//         title: "Gaaju Bomma",
//         singers: "Hesham Abdul Wahab",
//         song: "./Songs/Gaaju Bomma.mp3",
//     },
//     {
//         id: "6",
//         Image: "./images/Hanuman.jpeg",
//         title: "Hanuman",
//         singers: "GowarHari, Saicharan Bhaskaruni",
//         song: "./Songs/Hanuman Chalisa.mp3",
//     },
//     {
//         id: "7",
//         Image: "./images/orange.jpeg",
//         title: "Chilipiga chustav",
//         singers: "Karthik",
//         song: "./Songs/Chilipa.mp3",
//     },
//     {
//         id: "8",
//         Image: "./images/orange.jpeg",
//         title: "Nenu Nuvvantu",
//         singers: "Karthik",
//         song: "./Songs/Nenu Nuvvantu.mp3",
//     },
//     {
//         id: "10",
//         Image: "./images/Radhe Radhe.jpeg",
//         title: "Radhe Radhe",
//         singers: "Mangli",
//         song: "./Songs/Radhe Krishna Radhe.mp3",
//     },
//     {
//         id: "11",
//         Image: "./images/RRR.jpeg",
//         title: "Dosti",
//         singers: "Hemachandra",
//         song: "./Songs/rrrsong.mp3",
//     },
//     {
//         id: "12",
//         Image: "./images/Sooskei.jpeg",
//         title: "Sooskei",
//         singers: "Devi Sri Prasad",
//         song: "./Songs/Sooseki.mp3",
//     },
// ];

// const songsContainer = document.getElementById("songsContainer");

// // Function to pause all audio elements
// function pauseAllAudios() {
//     const allAudios = document.querySelectorAll("audio");
//     allAudios.forEach(audio => {
//         audio.pause();
//         audio.currentTime = 0; // Optional: Reset playback to the beginning
//     });

//     const allIcons = document.querySelectorAll(".playPause i");
//     allIcons.forEach(icon => {
//         icon.classList.remove("fa-pause");
//         icon.classList.add("fa-play");
//     });
// }

// data.forEach((song) => {
//     // Create song card element
//     let card = document.createElement("div");
//     card.classList.add("song-card");

//     card.innerHTML = `
//         <img src="${song.Image}" alt="${song.title}" class="song-image">
//         <h2>${song.title}</h2>
//         <p>${song.singers}</p>
//         <audio src="${song.song}" id="audio${song.id}" preload="auto"></audio>
//         <div>
//             <i class="fa-solid fa-backward-step prevIcon"></i>
//         </div>
//         <div class="playPause">
//             <i class="fa-solid fa-play" id="cntrlIcon${song.id}"></i>
//         </div>
//         <div>
//             <i class="fa-solid fa-forward-step nextIcon"></i>
//         </div>
//     `;

//     songsContainer.append(card);

//     // Play/Pause functionality
//     const playPauseIcon = card.querySelector(".playPause");
//     playPauseIcon.addEventListener("click", () => {
//         const audio = card.querySelector("audio");
//         const controlIcon = playPauseIcon.querySelector("i");

//         if (audio.paused) {
//             pauseAllAudios(); // Pause all other audios
//             audio.play();
//             controlIcon.classList.remove("fa-play");
//             controlIcon.classList.add("fa-pause");
//         } else {
//             audio.pause();
//             controlIcon.classList.remove("fa-pause");
//             controlIcon.classList.add("fa-play");
//         }
//     });

//     // Next/Previous song functionality
//     const nextIcon = card.querySelector(".nextIcon");
//     const prevIcon = card.querySelector(".prevIcon");

//     nextIcon.addEventListener("click", () => {
//         let nextCard = card.nextElementSibling || songsContainer.firstElementChild;
//         const nextAudio = nextCard.querySelector("audio");
//         const playButton = nextCard.querySelector(".playPause i");

//         pauseAllAudios();
//         nextAudio.play();
//         playButton.classList.remove("fa-play");
//         playButton.classList.add("fa-pause");
//     });

//     prevIcon.addEventListener("click", () => {
//         let prevCard = card.previousElementSibling || songsContainer.lastElementChild;
//         const prevAudio = prevCard.querySelector("audio");
//         const playButton = prevCard.querySelector(".playPause i");

//         pauseAllAudios();
//         prevAudio.play();
//         playButton.classList.remove("fa-play");
//         playButton.classList.add("fa-pause");
//     });
// });







































































// const data=[
//     {
//         id: "1",
//         Image: "./images/Adigaa.jpeg",
//         title: "Adigaa",
//         singers: "Karthik",
//         song: "./Songs/Adigaa.mp3",
//     },
//     {
//         id: "2",
//         Image: "./images/Amaran.jpeg",
//         title: "Hey Rangule",
//         singers: "G.v.Prakesh,Ramya Behara",
//         song: "./Songs/Hey Rangule.mp3",
//     },
//     {
//         id: "3",
//         Image: "./images/Chuttamalle.jpeg",
//         title: "Chuttamalle",
//         singers: "Shilpa Rao, Anirudh Ravichander",
//         song: "./Songs/Chuttamalle.mp3",
//     },
//     {
//         id: "5",
//         Image: "./images/gajju bomma.jpeg",
//         title: "Gaaju Bomma",
//         singers: "Hesham Abdul Wahab",
//         song: "./Songs/Gaaju Bomma.mp3",
//     },
//     {
//         id: "6",
//         Image: "./images/Hanuman.jpeg",
//         title: "Hanuman",
//         singers: "GowarHari,Saicharan Bhaskaruni",
//         song: "./Songs/Hanuman Chalisa.mp3",
//     },
//     {
//         id: "7",
//         Image: "./images/orange.jpeg",
//         title: "Chilipiga chustav",
//         singers: "Karthik",
//         song: "./Songs/Chilipa.mp3",
//     },
//     {
//         id: "8",
//         Image: "./images/orange.jpeg",
//         title: "Nenu Nuvvantu",
//         singers: "Karthik",
//         song: "./Songs/Nenu Nuvvantu.mp3",
//     },
//     {
//         id: "10",
//         Image: "./images/Radhe Radhe.jpeg",
//         title: "Radhe Radhe",
//         singers: "Mangli",
//         song: "./Songs/Radhe Krishna Radhe.mp3",
//     },
//     {
//         id: "11",
//         Image: "./images/RRR.jpeg",
//         title: "Dosti",
//         singers: "Hemachandra",
//         song: "./Songs/rrrsong.mp3",
//     },
//     {
//         id: "12",
//         Image: "./images/Sooskei.jpeg",
//         title: "Sooskei",
//         singers: "Devi sri Prasad",
//         song: "./Songs/Sooseki.mp3",
//     },
// ];



// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//     let card = document.createElement("div");
//     card.classList.add("song-card"); // Optional: Add a class to style your card

//     card.innerHTML = `
//         <img src="${data[i].Image}" alt="${data[i].title}" style="width: 100px; height: 100px;">
//         <h2>${data[i].title}</h2>
//         <p>${data[i].singers}</p>
//         <audio src="${data[i].song}" id="audio${data[i].id}" preload="auto"></audio>
//         <div> 
//             <i class="fa-solid fa-backward-step prevIcon"></i>
//         </div>
//         <div class="playPause">
//             <i class="fa-solid fa-play" id="cntrlIcon${data[i].id}"></i>
//         </div>
//         <div> 
//             <i class="fa-solid fa-forward-step nextIcon"></i>
//         </div>
        
// `;


//     card.style.width = "500px" ;
//     card.style.height= "400px"
//     card.style.border = "2px solid black";
//     card.style.padding = "10px";
//     card.style.display = "flex";
//     card.style.flexDirection = "column";
//     card.style.flexWrap="wrap"
//     card.style.justifyContent = "center";
//     card.style.alignItems = "center";

//     songsContainer.append(card);
// }
// const playPauseIcons = document.querySelectorAll(".playPause");

// playPauseIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         const audio = icon.closest(".song-card").querySelector("audio");
//         const controlIcon = icon.querySelector("i");

//         if (audio.paused) {
//             audio.play();
//             controlIcon.classList.remove("fa-play");
//             controlIcon.classList.add("fa-pause");
//         } else {
//             audio.pause();
//             controlIcon.classList.remove("fa-pause");
//             controlIcon.classList.add("fa-play");
//         }
//     });
// });


// const nextIcons = document.querySelectorAll(".nextIcon");
// const prevIcons = document.querySelectorAll(".prevIcon");

// nextIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         const currentCard = icon.closest(".song-card");
//         let nextCard = currentCard.nextElementSibling;
//         if (!nextCard) nextCard = songsContainer.firstElementChild;

//         const nextAudio = nextCard.querySelector("audio");
//         const playButton = nextCard.querySelector(".playPause i");

//         currentCard.querySelector("audio").pause();
//         currentCard.querySelector(".playPause i").classList.remove("fa-pause");
//         currentCard.querySelector(".playPause i").classList.add("fa-play");

//         nextAudio.play();
//         playButton.classList.remove("fa-play");
//         playButton.classList.add("fa-pause");
//     });
// });

// prevIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         const currentCard = icon.closest(".song-card");
//         let prevCard = currentCard.previousElementSibling;
//         if (!prevCard) prevCard = songsContainer.lastElementChild;

//         const prevAudio = prevCard.querySelector("audio");
//         const playButton = prevCard.querySelector(".playPause i");

//         currentCard.querySelector("audio").pause();
//         currentCard.querySelector(".playPause i").classList.remove("fa-pause");
//         currentCard.querySelector(".playPause i").classList.add("fa-play");

//         prevAudio.play();
//         playButton.classList.remove("fa-play");
//         playButton.classList.add("fa-pause");
//     });
// });


// // Function to pause all audio elements
// function pauseAllAudios() {
//     const allAudios = document.querySelectorAll("audio");
//     allAudios.forEach(audio => {
//         audio.pause();
//         audio.currentTime = 0; // Optional: Reset playback to the beginning
//     });

//     const allIcons = document.querySelectorAll(".playPause i");
//     allIcons.forEach(icon => {
//         icon.classList.remove("fa-pause");
//         icon.classList.add("fa-play");
//     });
// }

// playPauseIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         const audio = icon.closest(".song-card").querySelector("audio");
//         const controlIcon = icon.querySelector("i");

//         if (audio.paused) {
//             pauseAllAudios(); // Pause all other audios
//             audio.play();
//             controlIcon.classList.remove("fa-play");
//             controlIcon.classList.add("fa-pause");
//         } else {
//             audio.pause();
//             controlIcon.classList.remove("fa-pause");
//             controlIcon.classList.add("fa-play");
//         }
//     });
// });

// nextIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         const currentCard = icon.closest(".song-card");
//         let nextCard = currentCard.nextElementSibling;
//         if (!nextCard) nextCard = songsContainer.firstElementChild; // Loop to the first song

//         pauseAllAudios(); // Pause all audios globally

//         const nextAudio = nextCard.querySelector("audio");
//         const playButton = nextCard.querySelector(".playPause i");

//         nextAudio.play();
//         playButton.classList.remove("fa-play");
//         playButton.classList.add("fa-pause");
//     });
// });

// prevIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         const currentCard = icon.closest(".song-card");
//         let prevCard = currentCard.previousElementSibling;
//         if (!prevCard) prevCard = songsContainer.lastElementChild; // Loop to the last song

//         pauseAllAudios(); // Pause all audios globally

//         const prevAudio = prevCard.querySelector("audio");
//         const playButton = prevCard.querySelector(".playPause i");

//         prevAudio.play();
//         playButton.classList.remove("fa-play");
//         playButton.classList.add("fa-pause");
//     });
// });






// const data = [
//     {
//         id: "1",
//         Image: "./images/Adigaa.jpeg",
//         title: "Adigaa",
//         singers: "Karthik",
//         song: "./Songs/Adigaa.mp3",
//     },
//     {
//         id: "2",
//         Image: "./images/Amaran.jpeg",
//         title: "Hey Rangule",
//         singers: "G.v.Prakesh,Ramya Behara",
//         song: "./Songs/Hey Rangule.mp3",
//     },
//     {
//         id: "3",
//         Image: "./images/Chuttamalle.jpeg",
//         title: "Chuttamalle",
//         singers: "Shilpa Rao, Anirudh Ravichander",
//         song: "./Songs/Chuttamalle.mp3",
//     },
//     // {
//     //     id: "4",
//     //     Image: "./images/Devara.jpeg",
//     //     title: "Devara Theme",
//     //     singers: "Anirudh Ravichander",
//     //     song: "./Songs/Devera Theme.mp3",
//     // },
//     {
//         id: "5",
//         Image: "./images/gajju bomma.jpeg",
//         title: "Gaaju Bomma",
//         singers: "Hesham Abdul Wahab",
//         song: "./Songs/Gaaju Bomma.mp3",
//     },
//     {
//         id: "6",
//         Image: "./images/Hanuman.jpeg",
//         title: "Hanuman",
//         singers: "GowarHari,Saicharan Bhaskaruni",
//         song: "./Songs/Hanuman Chalisa.mp3",
//     },
//     {
//         id: "7",
//         Image: "./images/orange.jpeg",
//         title: "Chilipiga chustav",
//         singers: "Karthik",
//         song: "./Songs/Chilipa.mp3",
//     },
//     {
//         id: "8",
//         Image: "./images/orange.jpeg",
//         title: "Nenu Nuvvantu",
//         singers: "Karthik",
//         song: "./Songs/Nenu Nuvvantu.mp3",
//     },
//     // {
//     //     id: "9",
//     //     Image: "./images/pushpa.jpeg",
//     //     title: "Pushpa Pushpa",
//     //     singers: "Devi sri Prasad",
//     //     song: "./Songs/Pushpa Pushpa.mp3",
//     // },
//     {
//         id: "10",
//         Image: "./images/Radhe Radhe.jpeg",
//         title: "Radhe Radhe",
//         singers: "Mangli",
//         song: "./Songs/Radhe Krishna Radhe.mp3",
//     },
//     {
//         id: "11",
//         Image: "./images/RRR.jpeg",
//         title: "Dosti",
//         singers: "Hemachandra",
//         song: "./Songs/rrrsong.mp3",
//     },
//     {
//         id: "12",
//         Image: "./images/Sooskei.jpeg",
//         title: "Sooskei",
//         singers: "Devi sri Prasad",
//         song: "./Songs/Sooseki.mp3",
//     },
// ];



// let songsContainer = document.getElementById("songsContainer")
// for (i = 0; i < data.length; i++) {
//     console.log(data[i])
//     let card = document.createElement("div")
//     card.innerHTML = `<img src="${data[i].Image}" 
//     <h2>${data[i].title}</h2> 
//     <p>${data[i].singers}</p> 
//     <audio src="${data[i].song}"></audio>
//         <div> <i class="fa-solid fa-backward-step prevIcon"></i></div>
//                 <div class="playPause"><i class="fa-solid fa-play" id="cntrlIcon"></i></div>
//                 <div> <i class="fa-solid fa-forward-step nextIcon"></i></div>
//     `

// //     const playPause = document.querySelector(".playPause")
// // const nextlIcon = document.querySelector(".nextIcon")
// // const prevIcon = document.querySelector(".prevIcon")
// //     playPause.addEventListener("click",()=>{
// //         if(songsContainer.classList.contains("fa-play")){
        
// //         }
// //    })
//     card.style.border = "2px solid black"
//     card.style.padding = "10px"
//     card.style.display = "flex"
//     card.style.flexDirection = "column"
//     card.style.justifyContent = "center"
//     card.style.alignItems = "center"
//     songsContainer.append(card)
// }


// const playPause = document.querySelector(".playPause")
// const nextlIcon = document.querySelector(".nextIcon")
// const prevIcon = document.querySelector(".prevIcon")
//     playPause.addEventListener("click",()=>{
//         if(songsContainer.classList.contains("fa-play")){
        
//         }
//    })


// // const container= document.querySelector(".container")
// // const musicPlayer= document.querySelector(".music-player")
// // const circle= document.querySelector(".circle")
// // const controls= document.querySelector(".controls")
// // const range= document.querySelector(".range")


// // playPause.addEventListener("click", () => {
// //     if (songsContainer.classList.contains('pause')) {
// //         audio.play();
// //         cntrlIcon.className = "fa-solid fa-pause";
// //     } else {

// //         audio.pause();
// //         cntrlIcon.className = "fa-solid fa-play";
// //     }
// // });




// // const loadSong = (index) =>{
// //     coverImg.textContent = data[index].Image
// //     titleName.textContent = data[index].title
// //     singerNames.textContent = data[index].singers
// //     song.textContent = data[index].song
// // }
// // const playSong =()=>{
// //     container.classList.add('pause')
// //     cntrlIcon.firstElementChild.className = 'fa-solid fa-pause'
// //     audio.play()
// // }
// // const pauseSong =()=>{
// //     container.classList.remove('pause')
// //     cntrlIcon.firstElementChild.className = 'fa-solid fa-play'
// //     audio.pause()
// // }

// // cntrlIcon.addEventlistener("click", ()=>{
// //     if(container.classList.contains('pause')){
// //         pauseSong()
// //     }else{
// //         playSong()
// //     }
// // })




// // let container=document.createElement("div")
// // data.forEach(x=>x.Image)
// // console.log(data)
// // box.append(container)

// // let box = document.getElementById("box")

