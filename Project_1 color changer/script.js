const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((button) => {
    button.addEventListener('click', (b) =>{
        body.style.backgroundColor = b.target.id;
    });

});