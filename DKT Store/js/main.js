var size = document.getElementsByClassName('sub-news-bottom')[0].clientWidth + 0.5;
var slides = document.getElementsByClassName('sub-news-bottom');
var slide = document.getElementsByClassName('slide-sub-news-bottom')[0];
var tempSize = 0;
var fullSize = size * slides.length;



function previous() {
    if(tempSize != 0)
        tempSize -= size;
    else
        tempSize = fullSize-size;
    slide.style.marginLeft = '-' + tempSize + 'px';
}



function next() {
    if(tempSize != (fullSize-size))
        tempSize += size;
    else
        tempSize = 0;
        slide.style.marginLeft = '-' + tempSize + 'px';
}

setInterval(next,4000);




var size1 = document.getElementsByClassName('news-bottom')[0].clientWidth + 30.5;
var slides1 = document.getElementsByClassName('news-bottom');
var slide1 = document.getElementsByClassName('slide-news-bottom')[0];

var tempSize1 = 0;
var fullSize1 = size1 * slides1.length;

var slideOver1 = fullSize1 - size1*4;

var main = document.getElementsByClassName('main')[0];
console.log(main.clientWidth);
if(main.clientWidth >= 768 && main.clientWidth <= 1024) {
    slideOver1 = fullSize1 - size1*2;
}
if(main.clientWidth < 768) {
    size1 = document.getElementsByClassName('news-bottom')[0].clientWidth + 8;
    fullSize1 = size1 * slides1.length;
    slideOver1 = fullSize1 - size1;
}




function previous1() {
    if(tempSize1 != 0)
        tempSize1 -= size1;
    else
        tempSize1 = slideOver1;
    slide1.style.marginLeft = '-' + tempSize1 + 'px';
}


function next1() {
    if(tempSize1 != slideOver1)
        tempSize1 += size1;
    else
        tempSize1 = 0;
        slide1.style.marginLeft = '-' + tempSize1 + 'px';
}
setInterval(next1,4000);





function menu() {
    var menuList = document.getElementsByClassName('menu-list')[0];
    if( menuList.style.display == 'none' || menuList.style.display == '') {
        menuList.style.display = 'block'
    }
    else
        menuList.style.display = 'none'
}
