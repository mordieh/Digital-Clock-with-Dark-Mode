let hours = document.querySelector("#hrs");
let mins = document.querySelector("#min");
let scd = document.querySelector("#scd");

setInterval(()=> {
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours()<10 ?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10 ?"0":"") + currentTime.getMinutes();
    scd.innerHTML = (currentTime.getSeconds()<10 ?"0":"" ) + currentTime.getSeconds();


},1000)


// the mode

let modeBtn = document.querySelector(".mode img");
let TheBackground = document.querySelector(".hero");

window.onload = function () {
    const savedTheme =  localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        TheBackground.classList.add('dark');
        modeBtn.src = "icon/light-svgrepo-com.svg";
    }else {
        TheBackground.classList.remove('dark');
        modeBtn.src = "icon/dark-mode-night-moon-svgrepo-com.svg";
    }
};



modeBtn.onclick = function () {
    TheBackground.classList.toggle('dark');

    if(TheBackground.classList.contains("dark")){
        localStorage.setItem('theme', 'dark')
        modeBtn.src = "icon/light-svgrepo-com.svg";
    }else {
        localStorage.setItem('theme', 'light')
        modeBtn.src = "icon/dark-mode-night-moon-svgrepo-com.svg";
    }

}

