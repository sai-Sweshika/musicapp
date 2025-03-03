const data = [
    {
        id: "1",
        Image: "./Images/Adigaa.jpeg",
        title: "Adigaa",
        singers: "Karthik",
        song: "./Songs/Adigaa.mp3",
    },
    {
        id: "2",
        Image: "./Images/Amaran.jpeg",
        title: "Hey Rangule",
        singers: "G.v.Prakesh, Ramya Behara",
        song: "./Songs/Hey Rangule.mp3",
    },
    {
        id: "3",
        Image: "./Images/Chuttamalle.jpeg",
        title: "Chuttamalle",
        singers: "Shilpa Rao, Anirudh Ravichander",
        song: "./Songs/Chuttamalle.mp3",
    },
    {
        id: "4",
        Image: "./Images/Devara.jpeg",
        title: " Devara Song",
        singers: "Ravichander",
        song: "./Songs/DevaraTheme.mp3",
    },
    {
        id: "5",
        Image: "./Images/gajju bomma.jpeg",
        title: "Gaaju Bomma",
        singers: "Hesham Abdul Wahab",
        song: "./Songs/Gaaju Bomma.mp3",
    },
    {
        id: "6",
        Image: "./Images/orange.jpeg",
        title: "Nenu Nuvvantu",
        singers: "Karthik",
        song: "./Songs/Nenu Nuvvantu.mp3",
    },
    {
        id: "7",
        Image: "./Images/Hanuman.jpeg",
        title: "Hanuman",
        singers: "GowarHari, Saicharan Bhaskaruni",
        song: "./Songs/Hanuman Chalisa.mp3",
    },
    {
        id: "8",
        Image: "./Images/orange.jpeg",
        title: "Chilipiga chustav",
        singers: "Karthik",
        song: "./Songs/Chilipa.mp3",
    },
    {
        id: "9",
        Image: "./Images/pushpa.jpeg",
        title: "Pushpa Pushpa",
        singers: "Devi Sri Prasad",
        song: "./Songs/PushpaPushpaa.mp3",
    },
    {
        id: "10",
        Image: "./Images/Radhe Radhe.jpeg",
        title: "Radhe Radhe",
        singers: "Mangli",
        song: "./Songs/Radhe Krishna Radhe.mp3",
    },
    {
        id: "11",
        Image: "./Images/RRR.jpeg",
        title: "Dosti",
        singers: "Hemachandra",
        song: "./Songs/rrrsong.mp3",
    },
    {
        id: "12",
        Image: "./Images/Sooskei.jpeg",
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

























