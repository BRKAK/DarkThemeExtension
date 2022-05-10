
//chrome.runtime.onInstalled.addListener(() => {
//if (btnClicked) {
/*chrome.scripting.executeScript(
    {
        target: { tabId: tabId, allFrames: true },
        files: ['invert.js'],
    });*/
//btnClicked = false;
//}
//var elems = document.getElementsByTagNameNS("*");
//alert("za");
//console.log(elems);

//});
var keylog = null;
var i = 0;
function callBack(item) {
    window.addEventListener('keydown', (event) => {
        //if(KeyboardEvent.keyCode)
        console.log(event.key);
        keylog.push(event.key);
        console.log(keylog.toString() + "  KEYLOG");
        var fixer = '';
        for (i = 0; i < keylog.length; i++) {
            console.log(keylog.length);
            fixer += keylog[i];
        }
        console.log(fixer + " FIXER");
        if (fixer.includes("18071997")) {
            item.style.filter = "invert(100%) hue-rotate(180deg)";
            keylog = [];
            fixer = '';
        }
    });
}
var media = document.getElementsByTagName("*");
document.querySelector("html").style.filter = "invert(100%) hue-rotate(180deg)";
var lst = [];
for (i = 0; i < media.length; i++) {
    if (media[i].tagName.includes("IMG") || media[i].tagName == "VIDEO" || media[i].tagName == "PICTURE" || media[i].tagName == "SVG") {
        lst.push(media[i]);
        keylog = [];
        media[i].style.filter = "invert(100%) hue-rotate(180deg)";
    }
}//zaxd
tryGoogle();
function looper(elems) {
    for (i = 0; i < elems.length; i++) {
        elems[i].style.filter = "invert(100%) hue-rotate(180deg)";
    }
}
function tryGoogle() {
    try {
        document.getElementsByClassName("S7dMR")[0].style.filter = "invert(100%) hue-rotate(180deg)";
        var elems = document.getElementsByClassName("WM9LLd");//div images
        looper(elems);
        elems = document.getElementsByClassName("SJajHc");//span imgs
        looper(elems);
        elems = document.getElementById("tsuid46");//span imgs
        elems.style.filter = "invert(0%) hue-rotate(0deg)";



        //.style.filter="invert(100%) hue-rotate(180deg)";
    } catch (e) {
        console.log(e);
    }
}
console.log(document.getElementsByTagName("html"));

