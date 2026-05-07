const inputBox = document.querySelector("#name-input");
const updateButton = document.querySelector("#update-btn");
const profileButton = document.querySelector("#profile-btn");
const profileName = document.querySelector("#profile-name");
const avatarCircle = document.querySelector("#avatar");
const resetButton = document.querySelector("#reset-btn");
const clickCountDisplay = document.querySelector("#click-count");
const statusBar = document.querySelector("#status");

updateButton.addEventListener("click", (e) => {
    const name = inputBox.value;
    profileName.textContent = name;
    avatarCircle.textContent = name[0];
    statusBar.textContent = '✅ Name updated to ${name}!'
    inputBox.value = "";

});

const click = document.querySelector("#click-btn");
let clicks = 0

click.addEventListener("click", (e) => {
    clicks +=  1
    clickCountDisplay.textContent = `${clicks}`;
    statusbar.textContent = "I AM FREE!! AHHHH!!!";

})


resetButton.addEventListener("click", (e) => {
    profileName.textContent = "Blank Again";
    avatarCircle.textContent = "???";
    clicks = 0;
    clickCountDisplay.textContent = "0";
})