var sections = document.querySelectorAll('.section')
var roll = document.querySelector('.roll')
var elements = document.querySelectorAll('.element')
var subMain = document.querySelector('.sub-main')
var subMain2 = document.querySelector('.sub-main2')
var cancle = document.querySelector('.cancle')
var ok = document.querySelector('.ok')
var number = document.querySelector('.number')
var money = document.querySelector('.money')
var inputArray = [];



var animals = [
    {
        name : 'nai',
        src : "./asset/image/nai.png"
    },
    {
        name : 'bau',
        src : "./asset/image/bau.png"
    },
    {
        name : 'ga',
        src : "./asset/image/ga.png"
    },
    {
        name : 'ca',
        src : "./asset/image/ca.png"
    },
    {
        name : 'cua',
        src : "./asset/image/cua.png"
    },
    {
        name : 'tom',
        src : "./asset/image/tom.png"
    }
]


sections.forEach((section, index) => {
    section.onclick = function() {        
        if(section.style.backgroundColor !== 'goldenrod'){
            section.style.backgroundColor = 'goldenrod'
            subMain.style.display = 'flex';
        }
        else{
            section.style.backgroundColor = 'unset'
            money.textContent = Number(money.textContent) + Number(number.value);
        }
        
        cancle.onclick = function(){
            subMain.style.display = 'none';
            section.style.backgroundColor = 'unset';
        }
        ok.onclick = function(){
            if(number.value && number.value != 0){
                if(number.value > Number(money.textContent)){
                    subMain.style.display = 'none';
                    section.style.backgroundColor = 'unset';
                    alert('Không đủ điểm');
                }
                else if(number.value < 0){
                    alert('Số điểm cá cược không hợp lệ')
                }
                else{
                    subMain.style.display = 'none';
                    money.textContent = Number(money.textContent) - number.value;
                    inputArray[index] = number.value;
                }
            }
            else{
                subMain.style.display = 'none';
                section.style.backgroundColor = 'unset';
            }
        }
    }
    
    
    
    
})




roll.onclick = function() {
    sections.forEach((section) => {
        section.classList.remove('action')
    })
    var newInputArray = [];
    for(i=0;i<inputArray.length;i++){
        if(inputArray[i]) {  
            newInputArray.push(Number(inputArray[i]));
        }
    }
    inputArray = []
    var randomArray = []
    for(i=0;i<3;i++){
        do{
            var so = Math.round(Math.random()*10);
        }while(so<1 || so>6)
        randomArray.push(so-1);
    }
    

    elements.forEach((element, i) => {
        animals.forEach((animal, index) => {
                if(randomArray[i] == index)
                {
                    element.querySelector('img').setAttribute('src', animal.src);
                }
        })
    })

    var i=0;
    sections.forEach((section) => {      
        if(section.style.backgroundColor === 'goldenrod'){
            var d=0;
            elements.forEach((element) => {
                if(section.querySelector('img').getAttribute('src') === element.querySelector('img').getAttribute('src')){
                    d++;
                }
            })
            if(d>0)
            {
                money.textContent = Number(money.textContent) + Number(newInputArray[i])*(d+1);
                section.classList.add('action')
            }
            else
            {
                money.textContent = Number(money.textContent) + Number(newInputArray[i])*(d);
            }
            i=i+1;
        }
        section.style.backgroundColor = 'unset'
    })
    gone();
}

function gone(){
    if(money.textContent == 0)
    {
        subMain2.style.display = 'flex';
    }
}
