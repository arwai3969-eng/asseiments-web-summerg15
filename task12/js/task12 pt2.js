
var btn = document.getElementById('changeImg')
var img = document.getElementById('pic')

btn.addEventListener('click', () => {

    if (img.src.includes("1.jpeg")) {
        img.src = "images/pic1.jpg";
    } else {
        img.src = "images/pic2.jpg";
    }

})