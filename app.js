const countdown = document.querySelector("#countdown");

const MINUTES = 60;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

function updateCountdown() {
    const launchDate = Date.parse(countdown.dataset.time) / 1000;
    const difference = launchDate - Date.now() / 1000;

    let timeObject = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor((difference % DAYS) / HOURS),
        minutes: Math.floor((difference % HOURS) / MINUTES),
        seconds: Math.floor(difference % MINUTES),
    };

    document.getElementById("days").innerText =
        timeObject.days < 10 ? "0" + timeObject.days : timeObject.days;
    document.getElementById("hours").innerText =
        timeObject.hours < 10 ? "0" + timeObject.hours : timeObject.hours;
    document.getElementById("minutes").innerText =
        timeObject.minutes < 10 ? "0" + timeObject.minutes : timeObject.minutes;
    document.getElementById("seconds").innerText =
        timeObject.seconds < 10 ? "0" + timeObject.seconds : timeObject.seconds;
}
window.requestAnimationFrame(updateCountdown);
setInterval(updateCountdown, 1000);