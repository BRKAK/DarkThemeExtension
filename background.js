
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
function callBack() {
    var media = document.getElementsByTagName("*");
    var lst = [];
    for (var i = 0; i < media.length; i++) {

        if (media[i].tagName.includes("IMG") || media[i].tagName == "VIDEO" || media[i].tagName == "PICTURE" || media[i].tagName == "SVG") {
            lst.push(media[i]);
        }
    }

    for (var i = 0; i < lst.length; i++) {
        lst[i].style.filter = "invert(100%) hue-rotate(180deg)";
    }
}

var media = document.getElementsByTagName("*");
document.querySelector("html").style.filter = "invert(100%) hue-rotate(180deg)";
var lst = [];
for (var i = 0; i < media.length; i++) {
    if (media[i].tagName.includes("IMG") || media[i].tagName == "VIDEO" || media[i].tagName == "PICTURE" || media[i].tagName == "SVG") {
        lst.push(media[i]);
    }
}

for (var i = 0; i < lst.length; i++) {
    lst[i].style.filter = "invert(100%) hue-rotate(180deg)";
    console.log("success");
}
console.log(document.getElementsByTagName("html"));
window.addEventListener("click", callBack);

