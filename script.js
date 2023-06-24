function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startBtn").addEventListener("click", () => {
    startTime = new Date();
    document.getElementById("startTime").value = formatTime(startTime);
});

document.getElementById("endBtn").addEventListener("click", () => {
    endTime = new Date();
    document.getElementById("endTime").value = formatTime(endTime);

    const spentTime = endTime - startTime;
    const hours = Math.floor(spentTime / (1000 * 60 * 60));
    const minutes = Math.floor((spentTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((spentTime % (1000 * 60)) / 1000);

    document.getElementById("spentTime").value = `${hours}h ${minutes}m ${seconds}s`;

    // حساب تكلفة الوقت المستعمل
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const totalHours = hours + minutes / 60 + seconds / 3600;
    const totalCost = (totalHours * hourlyRate).toFixed(2);

    document.getElementById("totalCost").value = `${totalCost} da`;
});
/////////////////////////////////////////////////////////////////////////////////////////
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startBtn2").addEventListener("click", () => {
    startTime2 = new Date();
    document.getElementById("startTime2").value = formatTime(startTime2);
});

document.getElementById("endBtn2").addEventListener("click", () => {
    endTime2 = new Date();
    document.getElementById("endTime2").value = formatTime(endTime2);

    const spentTime2 = endTime2 - startTime2;
    const hours = Math.floor(spentTime2 / (1000 * 60 * 60));
    const minutes = Math.floor((spentTime2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((spentTime2 % (1000 * 60)) / 1000);

    document.getElementById("spentTime2").value = `${hours}h ${minutes}m ${seconds}s`;

    // حساب تكلفة الوقت المستعمل
    const hourlyRate2 = parseFloat(document.getElementById("hourlyRate2").value);
    const totalHours2 = hours + minutes / 60 + seconds / 3600;
    const totalCost2 = (totalHours2 * hourlyRate2).toFixed(2);

    document.getElementById("totalCost2").value = `${totalCost2} da`;
});
////////////////////////////////////////////////////////////////////////////////////////////////
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startBtn4").addEventListener("click", () => {
    startTime4 = new Date();
    document.getElementById("startTime4").value = formatTime(startTime4);
});

document.getElementById("endBtn4").addEventListener("click", () => {
    endTime4 = new Date();
    document.getElementById("endTime4").value = formatTime(endTime4);

    const spentTime4 = endTime4 - startTime4;
    const hours = Math.floor(spentTime4 / (1000 * 60 * 60));
    const minutes = Math.floor((spentTime4 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((spentTime4 % (1000 * 60)) / 1000);

    document.getElementById("spentTime4").value = `${hours}h ${minutes}m ${seconds}s`;

    // حساب تكلفة الوقت المستعمل
    const hourlyRate4 = parseFloat(document.getElementById("hourlyRate4").value);
    const totalHours4 = hours + minutes / 60 + seconds / 3600;
    const totalCost4 = (totalHours4 * hourlyRate4).toFixed(2);

    document.getElementById("totalCost4").value = `${totalCost4} da`;
});
function saveData() {
    const deviceContainers = document.getElementById("device").childNodes;
    const device = Array.from(deviceContainers).map((container) => {
        const deviceName = container.querySelector(".icon-section p").textContent;
        const startTime = container.querySelector(".time-controls input:nth-child(1)").value;
        const endTime = container.querySelector(".time-controls input:nth-child(2)").value;
        const spentTime = container.querySelector(".time-controls input:nth-child(3)").value;

        return { deviceName, startTime, endTime, spentTime };
    });

    localStorage.setItem("device", JSON.stringify(device));
}
function saveData() {
    const deviceContainers = document.getElementById("devices2").childNodes;
    const devices2 = Array.from(deviceContainers).map((container2) => {
        const deviceName2 = container2.querySelector(".icon-section p").textContent;
        const startTime2 = container2.querySelector(".time-controls input:nth-child(1)").value;
        const endTime2 = container2.querySelector(".time-controls input:nth-child(2)").value;
        const spentTime2 = container2.querySelector(".time-controls input:nth-child(3)").value;

        return { deviceName2, startTime2, endTime2, spentTime2 };
    });

    localStorage.setItem("devices2", JSON.stringify(devices2));
}





