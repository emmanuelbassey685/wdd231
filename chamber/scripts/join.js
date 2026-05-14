const modal1 = document.querySelector("#open-modal1");
const modal2 = document.querySelector("#open-modal2");
const modal3 = document.querySelector("#open-modal3");
const modal4 = document.querySelector("#open-modal4");

const closeButton1 = document.querySelector(".closeButton1");
const closeButton2 = document.querySelector(".closeButton2");
const closeButton3 = document.querySelector(".closeButton3");
const closeButton4 = document.querySelector(".closeButton4");

const npDialog = document.querySelector("#np-dialog");
const bronzeDialog = document.querySelector("#bronze-dialog");
const silverDialog = document.querySelector("#silver-dialog");
const goldDialog = document.querySelector("#gold-dialog");

modal1.addEventListener("click", () => {
    npDialog.showModal();
});

modal2.addEventListener("click", () => {
    bronzeDialog.showModal();
});

modal3.addEventListener("click", () => {
    silverDialog.showModal();
});

modal4.addEventListener("click", () => {
    goldDialog.showModal();
});

closeButton1.addEventListener("click", () => {
    npDialog.close();
});

closeButton2.addEventListener("click", () => {
    bronzeDialog.close();
});

closeButton3.addEventListener("click", () => {
    silverDialog.close();
});

closeButton4.addEventListener("click", () => {
    goldDialog.close();
});

window.addEventListener("click", (event) => {
    if(event.target == npDialog) {
        npDialog.close();
    }
});

window.addEventListener("click", (event) => {
    if(event.target == bronzeDialog) {
        bronzeDialog.close();
    }
});

window.addEventListener("click", (event) => {
    if(event.target == silverDialog) {
        silverDialog.close();
    }
});

window.addEventListener("click", (event) => {
    if(event.target == goldDialog) {
        goldDialog.close();
    }
});