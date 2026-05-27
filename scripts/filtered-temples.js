const temples = [

    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2025, May, 18",
        area: 19800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56573-main.jpg"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },

    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/5-Rome-Temple-2160345.jpg"
    }
];

/* DISPLAY TEMPLE CARDS */

function displayTemples(filteredTemples) {

    const container = document.querySelector("#temple-container");

    container.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `

    <h3>${temple.templeName}</h3>

    <p><span class="label">Location:</span> ${temple.location}</p>

    <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>

    <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>

    <img src="${temple.imageUrl}"
         alt="${temple.templeName}"
         loading="lazy">
`;

        container.appendChild(card);
    });
}

/* INITIAL DISPLAY */

displayTemples(temples);

/* FILTER BUTTONS */

document.querySelector("#filter-home").addEventListener("click", () => {

    document.querySelector("#gallery-title").textContent = "Home";

    displayTemples(temples);
});

document.querySelector("#filter-old").addEventListener("click", () => {

    document.querySelector("#gallery-title").textContent = "Old Temples";

    const oldTemples = temples.filter(temple =>
        parseInt(temple.dedicated.split(",")[0]) < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#filter-new").addEventListener("click", () => {

    document.querySelector("#gallery-title").textContent = "New Temples";

    const newTemples = temples.filter(temple =>
        parseInt(temple.dedicated.split(",")[0]) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#filter-large").addEventListener("click", () => {

    document.querySelector("#gallery-title").textContent = "Large Temples";

    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#filter-small").addEventListener("click", () => {

    document.querySelector("#gallery-title").textContent = "Small Temples";

    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    displayTemples(smallTemples);
});

/* MOBILE MENU */

const menuButton = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

/* FOOTER */

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;