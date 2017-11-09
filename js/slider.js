
const slider = document.getElementsByClassName('slider');
const menuOne = document.getElementsByClassName('menu-one');
const menuTwo = document.getElementsByClassName('menu-two');
const menuThree = document.getElementsByClassName('menu-three');

function openCard(event) {

    console.log(event);
    
    if (event.target.className === "menu-one") {

        menuOne['0'].style.width = '70%';
        menuTwo['0'].style.width = '15%';
        menuThree['0'].style.width = '15%';
        
    } else if (event.target.className === "menu-two") {

        menuOne['0'].style.width = '15%';
        menuTwo['0'].style.width = '70%';
        menuThree['0'].style.width = '15%';

    } else {
        
        menuOne['0'].style.width = '15%';
        menuTwo['0'].style.width = '15%';
        menuThree['0'].style.width = '70%';
    }
}
