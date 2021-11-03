const clockDeg = () => {
    const date = new Date()
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const secHand = document.querySelector("#seconds-hand");
    const minHand = document.querySelector("#minutes-hand");
    const hourHand = document.querySelector("#hours-hand");
    secHand.setAttribute("style", `transform: rotate(${((sec / 60) * 360) + 90}deg);`);
    // console.log(sec);
    hourHand.setAttribute("style", `transform: rotate(${((hour / 12) * 360) + ((min / 60) * 30) + 90}deg);`);
    minHand.setAttribute("style", `transform: rotate(${((min / 60) * 360) + ((sec / 60) * 6) + 90}deg);`);
}

setInterval(clockDeg, 100);