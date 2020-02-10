const surpriseSection = document.getElementById("surprise");
const randomTime = Math.random() * 5000; // Random time within 1 to 5 seconds;

function showSurprise() {
    surpriseSection.textContent = "🎉 Surprise! 🎉";
}

setTimeout(() => (surpriseSection.textContent = "🎉 Surprise! 🎉"), randomTime);

//Cancelling the timeOut
const timeoutID = setTimeout(callback, delay);

//Clears the timeout immediately
clearTimeout(timeoutID);

//Running function after 2 seconds
const section = document.getElementById("animateMe");

function startAnimation() {
    //Applies spinning animation to section element
    section.className = "spin";
}

setTimeout(startAnimation, 2000);
