const webDev = document.querySelector('.web-dev');
const webDevAmount = document.querySelector('.web-dev-amount');
const design = document.querySelector('.design');
const designAmount = document.querySelector('.design-amount');
const integration = document.querySelector('.integration');
const integrationAmount = document.querySelector('.integration-amount');
const training = document.querySelector('.training');
const trainingAmount = document.querySelector('.training-amount');
const totalAmount = document.querySelector('.total-amount');
let webDevToggle = false;
let designToggle = false;
let integrationToggle = false;
let trainingToggle = false;

webDev.addEventListener('click', (e) => {
    if (webDevToggle === false) {
        webDev.style.backgroundColor = '#be185d';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) + +webDevAmount.innerText.substring(1));
        console.log(totalAmount.innerText);
        webDevToggle = true;
    } else {
        webDev.style.backgroundColor = '#16a34a';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) - +webDevAmount.innerText.substring(1));
        webDevToggle = false;
    }
   
});
design.addEventListener('click', (e) => {
    if (designToggle === false) {
        design.style.backgroundColor = '#be185d';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) + +designAmount.innerText.substring(1));
        console.log(totalAmount.innerText);
        designToggle = true;
    } else {
        design.style.backgroundColor = '#16a34a';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) - +designAmount.innerText.substring(1));
        designToggle = false;
    }
});
integration.addEventListener('click', (e) => {
    if (integrationToggle === false) {
        integration.style.backgroundColor = '#be185d';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) + +integrationAmount.innerText.substring(1));
        console.log(totalAmount.innerText);
        integrationToggle = true;
    } else {
        integration.style.backgroundColor = '#16a34a';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) - +integrationAmount.innerText.substring(1));
        integrationToggle = false;
    }
});
training.addEventListener('click', (e) => {
    if (trainingToggle === false) {
        training.style.backgroundColor = '#be185d';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) + +trainingAmount.innerText.substring(1));
        console.log(totalAmount.innerText);
        trainingToggle = true;
    } else {
        training.style.backgroundColor = '#16a34a';
        totalAmount.innerText = '$'+ ( +totalAmount.innerText.substring(1) - +trainingAmount.innerText.substring(1));
        trainingToggle = false;
    }
});