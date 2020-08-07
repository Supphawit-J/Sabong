let images = []
let time =  1000;
let i = 0;
images[0] = 'img/slideimg01.jpg';
images[1] = 'img/slideimg02.jpg';
images[2] = 'img/slideimg03.jpg';
images[3] = 'img/slideimg04.jpg';
images[4] = 'img/slideimg05.jpg';

function changeImg(){
    document.slide.src = images[i];

    if (i< images.length -1) {
        i++;
    } else {
        i =0;
    }
    setTimeout("changeImg()", time);
     
}
window.onload = changeImg;