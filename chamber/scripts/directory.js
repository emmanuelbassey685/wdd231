const url = "../chamber/data/members.json";
const cards = document.getElementById('cards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members)
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let website = document.createElement("p");
        let address = document.createElement("p");
        let description = document.createElement("p");

        website.classList.add("link")
        description.classList.add("description")

        fullName.innerHTML = `${member.name}`;
        website.innerHTML = `${member.website}`;
        address.innerHTML = `${member.address}`;
        description.innerHTML = `${member.description}`;

        portrait.setAttribute("src", member.image);
        portrait.setAttribute("alt", `Logo of ${member.name}.`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "70");
        portrait.setAttribute("height", "70");

        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(description);

        cards.appendChild(card)
    });
}

const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");

    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid")
});

const hamButton = document.getElementById("hamButton");
const navLinks = document.getElementById("navLinks");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    navLinks.classList.toggle("active");
})