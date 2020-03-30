const defaultImage = 'image.png';

let images = [ "https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45", "https://www.w3schools.com/images/colorpicker.gif" ];
let currentImgId = 0;
let slideTimeOut = 3;

onAddImg = () => {
    let url = document.getElementById('path').value;
    images.push(url);
    document.getElementById('image').src = url;
    currentImgId = images.length - 1
};


getNextId = () => {
    return (((currentImgId + 1) % images.length) + images.length) % images.length;
};

nextImg = () => {
    newId = getNextId();
    changeImg(newId)
};

prevImg = () => {
    newId = (((currentImgId - 1) % images.length) + images.length) % images.length;
    changeImg(newId)
};

changeImg = (newId) => {
    url = images[newId] !== undefined ? images[newId] : defaultImage;
    document.getElementById('image').src = url;
    currentImgId = newId
};


onChangeTimeout = (e) => {
    clearTimeout(timer);
    let slideTimeOut = Number(e.target.value);
    console.log(slideTimeOut);
    timer = window.setInterval(nextImg, slideTimeOut * 1000);
};

onDelete = () => {
    let newId = getNextId();
    let newImg = images[newId] !== undefined ? images[newId] : defaultImage;

    images.pop(currentImgId);
    newId = images.findIndex((img) => img === newImg);
    currentImgId = newId;
    console.log(newImg);
    document.getElementById('image').src = newImg;

};


let timer = window.setInterval(nextImg, slideTimeOut * 1000);


document.getElementById('add-img').addEventListener('click', onAddImg);
document.querySelectorAll('.btn-right')[0].addEventListener('click', nextImg);
document.querySelectorAll('.btn-left')[0].addEventListener('click', prevImg);

document.getElementById('timer').addEventListener('change', onChangeTimeout);

document.getElementById('image').addEventListener('dblclick', onDelete);
