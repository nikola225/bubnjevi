let crashRide = document.querySelector('#crash-ride');
let hihatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}

const animateHiHatClosed = () => {
    hihatTop.style.top = '171px';
}

window.addEventListener("keydown", (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`)

    if(!keyElement) return;

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch(code){
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHiHatClosed();
            break;
    }
});

const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform') return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top') return;
    e.target.style.top = '166px';
}

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hihatTop.addEventListener("transitionend", removeHiHatTopTransition);

