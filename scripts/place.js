const currentYear = document.querySelector("#currentyear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const temperature = 10; // Celsius
const windSpeed = 4.8; // km/h

function calculateWindChill(temp, speed) {
    const v16 = Math.pow(speed, 0.16);

    return (
        13.12 +
        0.6215 * temp -
        11.37 * v16 +
        0.3965 * temp * v16
    ).toFixed(1);
}

const windChill = document.querySelector("#windChill");

if (windChill) {
    if (temperature <= 10 && windSpeed >= 4.8) {
        windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChill.textContent = "N/A";
    }
}