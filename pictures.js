var index = 0;

function click(up) {
    const pictures = ["bild1.webp","bild2.png","bild3.webp","bild4.png","bild5.png"];
    const image = document.getElementById("image");
    index = (index+(up?1:-1)+pictures.length)%pictures.length;
    image.classList.remove("show-image");
    image.classList.add("hide-image");
    setTimeout(function() {
        image.src = pictures[index];
        setTimeout(function() {
        image.classList.remove("hide-image");
        image.classList.add("show-image");
        },500)
    },250)
}

const image = document.getElementById("button-up");
image.addEventListener("click",function() {click(true)});

const image1 = document.getElementById("button-down");
image1.addEventListener("click",function() {click(false)});