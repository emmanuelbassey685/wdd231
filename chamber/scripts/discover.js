import {places} from '../data/places.mjs';

const placeContainer = document.querySelector('#place-container');

const displayPlaces = (places) => {
    places.forEach(place => {
        let card = document.createElement('section');
        card.classList.add('card');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let button = document.createElement('button');
        title.innerHTML =  `${place.name}`;
        image.setAttribute('src', place.image);
        image.setAttribute('alt', place.description);
        image.setAttribute('loading', 'lazy');
        figure.appendChild(image);
        address.innerHTML = `${place.address}`;
        description.innerHTML = `${place.description}`;
        button.innerHTML = `Learn More`;
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);

        placeContainer.appendChild(card);
    });
};

displayPlaces(places);

const hamButton = document.getElementById("hamButton");
const navLinks = document.getElementById("navLinks");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const lastVisited = document.querySelector('#last-visited');

const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions."
} else {
    const timeDifference = now - Number(lastVisit);
    const msInOneDay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor(timeDifference / msInOneDay);

    if (daysBetween < 1) {
        message = "Back so soon! Awesome";
    } else if (daysBetween === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You visited ${daysBetween} days ago.`
    }
}

if (lastVisited) {
    lastVisited.textContent = message;
}

localStorage.setItem("lastVisit", now.toString());