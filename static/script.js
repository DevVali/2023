"use strict";

const cd = document.querySelector("#cd");
// GMT+01:00
const cdDate = new Date(1672527600000).getTime();

const i = setInterval(() => {
    const date = new Date().getTime();
    const distance = cdDate - date;

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor(distance / 3600000) % 24;
    const minutes = Math.floor(distance / 60000) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    cd.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds `;

    if (distance < 0) {
        clearInterval(i);
        cd.textContent = "Happy New Year 2023!! 🎉🎆";
    }
}, 1000);
