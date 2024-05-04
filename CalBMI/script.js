const form = document.querySelector('form')
// if you take height and weight from hear it gets empty

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const review = document.querySelector('#review');

    if (isNaN(height) || height < 0 || height === '') // checking the false condition first
    {
        result.innerHTML = `<span> Please enter valid height  ${height}</span>`;
    } else if (isNaN(weight) || weight < 0 || weight === '') // checking the false condition first
    {
        result.innerHTML = `<span> Please enter valid weight  ${weight}</span>`;

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span> Result:${bmi}</span>`
        if (bmi > 24.9) {
            review.innerHTML = `<span> Your BMI is ${bmi} : Overweight</span>`;
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            review.innerHTML = `<span> Your BMI is ${bmi} : Normal Weight</span>`;
        }
        else (bmi < 18.6)
        {
            review.innerHTML = `<span> Your BMI is ${bmi} : Under weight</span>`;
        }
    }

  
});

