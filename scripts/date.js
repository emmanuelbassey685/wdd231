const year = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Updated: ${text}`;