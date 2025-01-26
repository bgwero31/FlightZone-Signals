function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function generateSequentialTimes() {
    let baseTime = new Date();
    let times = [];
    for (let i = 0; i < 10; i++) {
        baseTime.setSeconds(baseTime.getSeconds() + Math.floor(Math.random() * 20) + 10); // Increment by 10-30 sec
        let hours = baseTime.getHours().toString().padStart(2, '0');
        let minutes = baseTime.getMinutes().toString().padStart(2, '0');
        let seconds = baseTime.getSeconds().toString().padStart(2, '0');
        times.push(`${hours}:${minutes}:${seconds}`);
    }
    return times;
}

function generatePredictions() {
    const bettingSites = ["Africa Bet", "MWOS Betting", "Spin City"];
    let times = generateSequentialTimes();
    let output = `<h3>📡 Signal Set for ${getCurrentTime()}</h3>`;

    bettingSites.forEach((site, index) => {
        output += `<h3>${site}</h3>`;
        for (let i = 0; i < 10; i++) {
            let multiplier = (Math.random() * (12 - 1) + 1).toFixed(2); // Random multiplier 1x - 12x
            let riskLabel = multiplier >= 10 ? " 🔥 (risk)" : "";
            output += `<p>🕒 ${times[i]} | 🎯 Target: ${multiplier}x ${riskLabel}</p>`;
        }
    });

    document.getElementById('prediction-box').innerHTML = output;
}

function refreshPredictions() {
    generatePredictions();
}

document.addEventListener("DOMContentLoaded", generatePredictions);
