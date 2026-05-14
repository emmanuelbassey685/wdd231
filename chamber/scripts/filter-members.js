const membersUrl = "../chamber/data/member.json";
const cards = document.getElementById('card-container');

async function getData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembers(data.members)
}

getData();

function displayMembers(members) {
    const filteredData = members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
    const shuffled = filteredData.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffled.slice(0, 3);

    selectedMembers.forEach((member) => {
        const section = document.createElement("section");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const memberLevel = document.createElement("p");

        h2.innerHTML = `${member.name}`;
        p1.innerHTML = `${member.website}`;
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name);
        img.setAttribute("width", 60)
        p2.innerHTML = `<b>Phone:</b> ${member.phone}`;  
        p3.innerHTML = `<b>Address:</b> ${member.address}`;    
        memberLevel.innerHTML = `<b>${member.membershipLevel}</b>`;
        memberLevel.classList.add("member-level")

        div.appendChild(h2);
        div.appendChild(p1);
        section.appendChild(div);
        section.appendChild(img);
        section.appendChild(p2);
        section.appendChild(p3)
        section.appendChild(memberLevel);

        cards.appendChild(section);
    })
}