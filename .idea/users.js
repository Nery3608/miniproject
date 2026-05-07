const inputBox = document.querySelector("#name-input");
const updateButton = document.querySelector("#update-btn");
const profileButton = document.querySelector("#profile-btn");
const profileName = document.querySelector("#profile-name");
const avatarCircle = document.querySelector("#avatar");
const resetButton = document.querySelector("#reset-btn");
const likeCountDisplay = document.querySelector("#like-count");
const statusBar = document.querySelector("#status");

updateButton.addEventListener("click", (e) => {
    const name = inputBox.value;
    profileName.textContent = name;
    avatarCircle.textContent = name[0];
    statusBar.textContent = '✅ Name updated to ${name}!'
    inputBox.value = "";

});

const like = document.querySelector("#like-btn");
let likes = 0

like.addEventListener("click", (e) => {
    let likes = + 1
    likeCountDisplay.textContent = "1";
    statusbar.textContent = "❤️ You have [likes] like(s)!";

})


resetButton.addEventListener("click", (e) => {
    profileName.textContent = "Your Name!";
    avatarCircle.textContent = "???";
    likes = 0;
    likeCountDisplay.textContent = "0";
    statusbar.textContent = "🔄 Everything has been reset!";
})