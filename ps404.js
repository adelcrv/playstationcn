"use strict";

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startBtn3").addEventListener("click", () => {
    startTime3 = new Date();
    document.getElementById("startTime3").value = formatTime(startTime3);
});

document.getElementById("endBtn3").addEventListener("click", () => {
    endTime3 = new Date();
    document.getElementById("endTime3").value = formatTime(endTime3);

    const spentTime3 = endTime3 - startTime3;
    const hours = Math.floor(spentTime3 / (1000 * 60 * 60));
    const minutes = Math.floor((spentTime3 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((spentTime3 % (1000 * 60)) / 1000);

    document.getElementById("spentTime3").value = `${hours}h ${minutes}m ${seconds}s`;

    // حساب تكلفة الوقت المستعمل
    const hourlyRate3 = parseFloat(document.getElementById("hourlyRate3").value);
    const totalHours3 = hours + minutes / 60 + seconds / 3600;
    const totalCost3 = (totalHours3 * hourlyRate3).toFixed(2);

    document.getElementById("totalCost3").value = `${totalCost3} da`;
});
