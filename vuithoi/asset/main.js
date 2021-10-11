var refuseBtn = document.querySelectorAll('button')[0];
var main = document.querySelectorAll('.main');
var html = document.querySelector('html');
console.log(html.clientWidth - 40)
console.log(html.clientHeight - 40)

function agree() {
    main[0].style.display = 'none';
    main[1].style.display = 'block';
}

function refuse() {
    refuseBtn.style.position = 'absolute';
    do {
        refuseBtn.style.top = Math.floor(Math.random()*700) + 'px';
    }while(Math.floor(Math.random()*800) >= (html.clientHeight - 40))
    
    do {
        refuseBtn.style.left = Math.floor(Math.random()*1200) + 'px';
    }while(Math.floor(Math.random()*1200) >= (html.clientWidth - 40))

    console.log(refuseBtn.style.top)
    console.log(refuseBtn.style.left)
}

function back() {
    main[0].style.display = 'block';
    main[1].style.display = 'none';
}