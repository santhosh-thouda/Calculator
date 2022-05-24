let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');

let screenValue = '';

for (let i of buttons) {
    i.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);

        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        
        else if(buttonText == '='){
            buttonText = eval(screenValue);
            screen.value = buttonText;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });
};
