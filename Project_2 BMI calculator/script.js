const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results');
    const bmi_guide = document.querySelector('#weight-guide');

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = '<span>Please enter a valid Height!</span>';
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = '<span>Please enter a valid weight!</span>';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            bmi_guide.innerHTML = `Under Weight!!!`
        } else if(bmi >= 18.6 && bmi <=24.9){
            bmi_guide.innerHTML = `Normal Weight`
        }else{
            bmi_guide.innerHTML = `Overweight!!!`
        }
    }
});