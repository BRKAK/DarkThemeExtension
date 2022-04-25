var media = document.getElementsByTagName("*");
document.getElementsByTagName("*").style.filter = "invert(100%) hue-rotate(180deg)";
var lst = [];
for (var i = 0; i < media.length; i++) {
    if (media[i].tagName == "IMG" || media[i].tagName == "VIDEO" || media[i].tagName == "PICTURE") {
        lst.push(media[i]);
    }
}
for (var i = 0; i < lst.length; i++) {
    lst[i].style.filter = "invert(100%) hue-rotate(180deg)";
}