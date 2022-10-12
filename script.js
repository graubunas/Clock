//Runs the "setClock" function every second
setInterval(setClock, 1000)

// Picks hands from html
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// 
function setClock() {
    const currentDate = new Date()
    // Takes current time (s, m, h)
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    // Takes .hand from css with the --rotation var and changes transform property times 360 because there is 360 degs in a complete rotation.
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// the clock starts in the current time when page loads
setClock()