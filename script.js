let arr = [
    { songName: "Akhiyaan_Gulaab_.mp3", image: "https://tse2.mm.bing.net/th?id=OIP.WBh_QSeq7s1WBtnw6b0RdgHaEK&pid=Api&P=0&h=180", url: "./songs/Akhiyaan_Gulaab_.mp3" },
    { songName: "Kabhi_Jo_Badal_Barse_x_Let_Me_Down_Slowly_.mp3", image: "https://pianobajao.com/wp-content/uploads/2020/04/Kabhi-Jo-Badal-Barse-Piano-Notes-768x432.jpg", url: "./songs/Kabhi_Jo_Badal_Barse_x_Let_Me_Down_Slowly_.mp3" },
    { songName: "Saiyaara_.mp3", image: "https://tse2.mm.bing.net/th?id=OIP.XFvus6dOc0AliRCHd0IhCAHaEK&pid=Api&P=0&h=180", url: "./songs/Saiyaara_.mp3" },
    { songName: "Salamat_.mp3", image: "https://tse4.mm.bing.net/th?id=OIP.PdeiGESLzgPWkZWOUn6oeQHaEK&pid=Api&P=0&h=180", url: "./songs/Salamat_.mp3" },
    { songName: "Chal_Wahan_Jaate_Hain-_Arijit_Singh.mp3", image: "https://tse1.mm.bing.net/th?id=OIP.6JYZrvcG4H4GSr5OWSl2lgHaHa&pid=Api&P=0&w=300&h=300", url: "./songs/Chal_Wahan_Jaate_Hain-_Arijit_Singh.mp3" },
    { songName: "Closer_X_Apna_Bana_Le__Mashup_.mp3", image: "https://tse4.mm.bing.net/th?id=OIP.P6zMvAm757xVygu_tE0RZAHaEK&pid=Api&P=0&h=180", url: "./songs/Closer_X_Apna_Bana_Le__Mashup_.mp3" },
    { songName: "Heeriye_X_Chaleya_X_Tu_Aake_Dekhle.mp3", image: "https://tse1.mm.bing.net/th?id=OIP.BsQ1Wlw2XSAD8hXk5lzc-wAAAA&pid=Api&P=0&h=180", url: "./songs/Heeriye_X_Chaleya_X_Tu_Aake_Dekhle.mp3" },
    { songName: "Kuch_To_Hai_.mp3", image: "https://tse1.explicit.bing.net/th?id=OIP.xKuSpqtkZoOJ-0dcith_1AHaEK&pid=Api&P=0&h=180", url: "./songs/Kuch_To_Hai_.mp3" },
    { songName: "Main_Kabhi_Bhoolunga_Na_Tujhe_.mp3", image: "https://tse3.mm.bing.net/th?id=OIP.97Od1DeG9EisjPTvTklSpwHaEK&pid=Api&P=0&h=180", url: "./songs/Main_Kabhi_Bhoolunga_Na_Tujhe_.mp3" },
    { songName: "Tera_Hoke_Rahoon_.mp3", image: "https://tse1.mm.bing.net/th?id=OIP.UIc0JuzVWSkkq6ZNTDOisQHaFj&pid=Api&P=0&h=180", url: "./songs/Tera_Hoke_Rahoon_.mp3" },
    { songName: "Teri_Meri_Kahaani_.mp3", image: "https://tse1.mm.bing.net/th?id=OIP.5YwEbgnQSJ9H4uFJH6AmKADQEs&pid=Api&P=0&h=180", url: "./songs/Teri_Meri_Kahaani_.mp3" },
    { songName: "Toota_Jo_Kabhi_Tara_.mp3", image: "https://tse1.mm.bing.net/th?id=OIP.aPfcSxX2E8QqeTB_OL0zcAHaEK&pid=Api&P=0&h=180", url: "./songs/Toota_Jo_Kabhi_Tara_.mp3" }
];

let play = document.querySelector(".play");
let backward = document.querySelector(".backWard")
let forWard = document.querySelector(".forward")
let audio = new Audio();
let flag = 0;
let selectedSong = 0;

function controlOnDetailBar() {
    audio.addEventListener("timeupdate", () => {
        // console.log(audio.currentTime , audio.duration);

        document.querySelector(".songTime")
            .innerHTML = `${secondsToMinutesSeconds(audio.currentTime)}/${secondsToMinutesSeconds(audio.duration)}`

        document.querySelector(".circle")
            .style.left = (audio.currentTime / audio.duration) * 100 + "%";

        document.querySelector(".sick")
            .classList.remove("hidden")

        document.querySelector(".songTime")
            .classList.remove("hidden")
    });
}

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

function displaySongs() {
    let container = "";
    let musicContainer = document.querySelector(".music-con")

    arr.forEach((val, indx) => {
        container += `    <div class="musics bd-top" id="${indx}">
        <img src="${val.image}" alt="">
        <p class="songName">${val.songName}</p>
    </div>`
    });
    musicContainer.innerHTML = container;
    audio.src = arr[selectedSong].url;
};
displaySongs();

let musicCards = document.querySelector(".music-con");
let imageCon = document.querySelector(".img-con")
let poster = document.querySelector(".img-con");
let songNaam = document.querySelector(".songname")
let sickBar = document.querySelector(".sick")
let circle = document.querySelector(".circle")

sickBar.addEventListener("click", (e) => {
    let rct = sickBar.getBoundingClientRect()

    let percen = Math.floor((e.offsetX / rct.width) * 100)
    circle.style.left = e.offsetX + "px"
    audio.currentTime = (percen * audio.duration)/100
    audio.play()
    play.innerHTML = `<i class="ri-pause-large-line"></i>`

})
let rect = sickBar.getBoundingClientRect()
console.log(rect)


function responsive() {
    if (window.outerWidth < 1281) {
        document.querySelectorAll(".musics")
            .forEach((e) => {

                e.addEventListener("click", () => {
                    document.querySelector(".left-con")
                        .style.display = "block";
                })

                e.addEventListener("click", () => {
                    document.querySelector(".playBar")
                        .classList.remove("hidden")

                })

                document.querySelector(".back")
                    .addEventListener("click", () => {
                        document.querySelector(".left-con")
                            .style.display = "none";
                        audio.pause();
                        play.innerHTML = `<i class="ri-play-large-fill"></i>`
                        flag = 0;
                    });
            })
    }
};
responsive();

// document.querySelector(".sick")
//     .addEventListener("click", (dets) => {
//         console.log(dets.clientX);
//         let movement = Math.floor((dets.clientX / 1070) * 100);
//         console.log(movement)
//         document.querySelector(".circle")
//             .style.left = `${movement}%-${10}%`;
//     });

musicCards.addEventListener("click", function (dets) {
    // console.log(arr[dets.target.id].url);
    selectedSong = dets.target.id;
    displaySongs();
    audio.play();
    play.innerHTML = `<i class="ri-pause-large-line"></i>`
    flag = 1;

    poster.innerHTML = `<img class = "w-full h-full" src="${arr[selectedSong].image}" alt="">`
    songNaam.innerHTML = `<p>${arr[selectedSong].songName}</p>`
    console.log(selectedSong);

    controlOnDetailBar();
    responsive();

});


play.addEventListener("click", () => {

    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-large-line"></i>`
        flag = 1;
        // displaySongs();
        audio.play();
        songNaam.innerHTML = `<p>${arr[selectedSong].songName}</p>`
        poster.innerHTML = `<img class = "w-full h-full" src="${arr[selectedSong].image}" alt="">`
        controlOnDetailBar();
        responsive();
    } else {
        play.innerHTML = `<i class="ri-play-large-fill"></i>`
        flag = 0;

        audio.pause();
    }

});

const autoForward = () => {
    if (audio.currentTime == audio.duration && selectedSong >= arr.length - 1) {
        selectedSong++;
        displaySongs()
        audio.play()
    }
};

forWard.addEventListener("click", () => {

    if (selectedSong < arr.length - 1) {
        selectedSong++;
        displaySongs();
        audio.play();
        poster.innerHTML = `<img class = "w-full h-full" src="${arr[selectedSong].image}" alt="">`
        play.innerHTML = `<i class="ri-pause-large-line"></i>`
        flag = 1;
        songNaam.innerHTML = `<p>${arr[selectedSong].songName}</p>`
        controlOnDetailBar();
        responsive();
    } else {
        forWard.style.opacity = 0.4;
    }
});

backward.addEventListener("click", () => {
    if (selectedSong > 0) {
        forWard.style.opacity = "none";
        selectedSong--;
        displaySongs();
        audio.play();
        poster.innerHTML = `<img class = "w-full h-full" src="${arr[selectedSong].image}" alt="">`
        play.innerHTML = `<i class="ri-pause-large-line"></i>`
        flag = 1;
        songNaam.innerHTML = `<p>${arr[selectedSong].songName}</p>`
        controlOnDetailBar();
        responsive();
    };
});

autoForward();