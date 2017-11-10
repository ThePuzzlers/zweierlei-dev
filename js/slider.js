
const slider = document.getElementsByClassName('slider');
const menuOne = document.getElementsByClassName('menu-one');
const menuTwo = document.getElementsByClassName('menu-two');
const menuThree = document.getElementsByClassName('menu-three');
const germany = document.getElementsByClassName('germany');

const product = document.getElementById('pear');



slider['0'].addEventListener('click', event => {
    if (event.target.className || event.target.parentElement.className || event.target.parentElement.parentElement.className === "menu-one") {
        menuOne['0'].style.width = '70%';
        menuTwo['0'].style.width = '15%';
        menuThree['0'].style.width = '15%';
        pear.style.marginLeft = '10rem';
        pear.style.transition = 'margin-left 1s ease-out';
        germany['0'].style.height = '25rem';
        germany['0'].style.transition = 'height 1s ease-out';  
        console.log(event);
        
    
    } else if (event.target.className || event.target.parentElement.className || event.target.parentElement.parentElement.className === "menu-two") {
        menuOne['0'].style.width = '15%';
        menuTwo['0'].style.width = '70%';
        menuThree['0'].style.width = '15%';
        pear.style.marginLeft = '1rem';
        pear.style.transition = 'margin-left 1s ease-out';
        germany['0'].style.height = '18rem';
        germany['0'].style.transition = 'height 1s ease-out';
    } else if (event.target.className || event.target.parentElement.className || event.target.parentElement.parentElement.className === "menu-three") {
        menuOne['0'].style.width = '15%';
        menuTwo['0'].style.width = '15%';
        menuThree['0'].style.width = '70%';
    }
});


// function checkCard(event) {
//     console.log(event.path.indexOf('section.menu-one'));
//     console.log(event);
    
// }