let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function displayTime() {
    let date = new Date();

    // Getting hours, minutes, and seconds
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30 * hh + mm / 2; // 360 degrees / 12 hours = 30 degrees per hour
    let mrotation = 6 * mm; // 360 degrees / 60 minutes = 6 degrees per minute
    let srotation = 6 * ss; // 360 degrees / 60 seconds = 6 degrees per second

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}

// Update the clock every second
setInterval(displayTime, 1000);

// Initial call to set the clock hands right away
displayTime();
