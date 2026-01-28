//PROJECT FOR CHANGING BACKGROUND COLOR CONTINUOSLY BY JAVASCCRIPT METHODS

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor((Math.random() * 16))];
    }
    return color;
};
//console.log(randomColor());

let intervalId;

const startChangingColor = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}


const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};


document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

//theory 
/*
first create a hex code variable related to its random performing task and random generation of ccolors wrapped in a function

after that adjoint the event listener method funcctionality into them from document

add the color random generation bg color in to setInterval method for continous generation of colors 
*/