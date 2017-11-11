
const slider = document.getElementsByClassName('slider');
const menuOne = document.getElementsByClassName('menu-one');
const menuTwo = document.getElementsByClassName('menu-two');
const menuThree = document.getElementsByClassName('menu-three');
const germany = document.getElementById('germany');

const menuOneFrame = document.getElementById('menu-one-frame');



menuOne['0'].onclick = function (event) {

        menuOne['0'].style.width = '70%';
        menuTwo['0'].style.width = '15%';
        menuThree['0'].style.width = '15%';

        menuOneFrame.classList.add("margin-left");
        germany.classList.add("grow-img");
        

    console.log('menu one is clicked');
};

menuTwo['0'].onclick = function (event) {

        menuOne['0'].style.width = '15%';
        menuTwo['0'].style.width = '70%';
        menuThree['0'].style.width = '15%';

        menuOneFrame.classList.remove("margin-left");
        germany.classList.remove("grow-img");
        
    
        console.log('menu two is clicked');
};

menuThree['0'].onclick = function (event) {

        menuOne['0'].style.width = '15%';
        menuTwo['0'].style.width = '15%';
        menuThree['0'].style.width = '70%';

        menuOneFrame.classList.remove("margin-left");
        germany.classList.remove("grow-img");
        
        
    
        console.log('menu three is clicked');
};


// function checkCard(event) {
//     console.log(event.path.indexOf('section.menu-one'));
//     console.log(event);
    
// }