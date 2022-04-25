var buttonOn = (localStorage.bntOn != undefined || localStorage.btnOn != null) ? localStorage.btnOn : false;
var btnClicked = false;
console.log(localStorage.btnOn + " at first");
const btn = document.querySelector(".settingsContainer");
const circle = document.querySelector(".circle");
check();
function check() {
    if (localStorage.btnOn.includes("t") || !buttonOn) {
        buttonOn = true;
        console.log(localStorage.btnOn + " LOCAL STORAGE BTN TRUE?");
        btn.style.animation = "backgroundYellow 0.5s forwards";
        circle.style.animation = "moveCircleRight 0.5s forwards";
    }
    else {
        buttonOn = false;
        console.log(localStorage.btnOn + " LOCAL STORAGE BTN TRUE?");
        btn.style.animation = "backgroundBlue 0.5s forwards";
        circle.style.animation = "moveCircleLeft 0.5s forwards";
    }
    console.log(buttonOn+" Button STATE");
}



btn.addEventListener("click", () => {
    btnClicked = true;
    if (!buttonOn)
        localStorage.setItem("btnOn", true);
    else
        localStorage.setItem("btnOn", false);
    check();
});


//export { buttonOn };