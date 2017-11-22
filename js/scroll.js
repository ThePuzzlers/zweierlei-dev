

function getElement(event) {
    
    let clickedElement = event.target.innerText.toLowerCase();
    let elementID = document.getElementById(clickedElement);

    console.log(elementID);
}