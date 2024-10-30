// Countdown Timer
const countdown = document.getElementById("countdown");
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdown.innerHTML = `<div>${days} Days</div><div>${hours} Hours</div><div>${minutes} Minutes</div>`;

    if (distance < 0) {
        clearInterval(timer);
        countdown.innerHTML = "The event has started!";
    }
}

const timer = setInterval(updateCountdown, 1000);

// RSVP Pop-Up Forms
function handleRSVP(response) {
    document.getElementById(response === "yes" ? "yesPopup" : "noPopup").style.display = "block";
}

function submitNo() {
    document.getElementById("noPopup").style.display = "none";
    document.getElementById("noName").value = "";
    window.scrollTo(0, 0); // Scroll back to image 1
}

document.getElementById("yesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("yesPopup").style.display = "none";
    this.reset();
});
