const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.minute');
const secHand = document.querySelector('.second');
const time = document.querySelector('.time');
const btn = document.querySelector('.btn')

const updateTime = () => {
    const date = new Date();
    let secondDeg = (date.getSeconds() / 60) * 360;
    let minuteDeg = (((date.getSeconds() / 60) + date.getMinutes()) / 60) * 360;
    let hourDeg = (((date.getMinutes() / 60) + date.getHours()) / 12) * 360;

    time.textContent = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;

    secHand.style.transform = `rotate(${secondDeg}deg)`
    minHand.style.transform = `rotate(${minuteDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

updateTime();

setInterval(updateTime, 1000);

document.addEventListener('DOMContentLoaded',() => {
    const dark = localStorage.getItem('dark');
    if(dark) {
        if(dark==="on") {
            darkMode();
        }
    }
})

function darkMode() {
    btn.textContent="Light Mode";
        btn.style.backgroundColor = "var(--primary-color)";
        btn.style.color = "var(--black-color)"
        document.querySelector('body').style.backgroundColor = "var(--black-color)";
        time.style.color = "var(--primary-color)";
        document.querySelector('.container .clock').style.backgroundColor = "#303030";
        document.querySelector('.container .clock').style.boxShadow = "0 15px 25px rgba(255,255,255,0.1), 0 25px 45px rgba(255,255,255,0.1)";
        minHand.style.backgroundColor = "var(--primary-color)";
        hourHand.style.backgroundColor = "var(--primary-color)";
        document.querySelectorAll('span').forEach(s => {
            s.style.color = "var(--primary-color)"
        });
}

btn.addEventListener('click', () => {
    if(btn.textContent==="Dark Mode") {
        localStorage.setItem("dark","on");
        darkMode();
    } else {
        localStorage.setItem("dark","off");
        btn.textContent="Dark Mode";
        btn.style.backgroundColor = null;
        btn.style.color = null;
        document.querySelector('body').style.backgroundColor = null
        time.style.color = null
        document.querySelector('.container .clock').style.backgroundColor = null
        document.querySelector('.container .clock').style.boxShadow = null
        minHand.style.backgroundColor = null
        hourHand.style.backgroundColor = null
        document.querySelectorAll('span').forEach(s => {
            s.style.color = null
        });
    }
})