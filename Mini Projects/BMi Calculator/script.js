const form  = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');
    if(Height == '' || Height < 0 || isNaN(Height)){
        result.innerHTML = `please give a valid height ${Height}`
    }
    else if(Weight == '' || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `please give a valid height ${Weight}`
    }
    else{
        const bmi = (Weight / ((Height*Height) / 10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<span>Under Weight: ${bmi}</span>`
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML = `<span>Normal Range: ${bmi}</span>`
        }
        else if(bmi>24.9){
            result.innerHTML = `<span>Over weight: ${bmi}</span>`
        }
       
    }

})