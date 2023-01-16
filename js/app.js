// variables
const prices = {
    product: 0.5,
    orders: 0.25,
    package: {basic: 0, professional: 25, premium: 60},
    accounting: 35,
    terminal: 5,
};

const dropDownList = document.querySelector('.select__dropdown').children; //dropdown list changet into array
const calcSelect = document.querySelector('.calc__select'); //calc-select - for dropdown list
const listField = document.querySelector('.select__input'); // for dropdown list
const producsInput = document.querySelector('#products'); // for inputs
const ordersInput = document.querySelector('#orders'); // for inputs
const accountingCheckbox = document.querySelector('#accounting'); // for checkbox1
const terminalCheckbox = document.querySelector('#terminal'); // for checkbox1

//input fields
const productListItem = document.querySelector('[data-id="products"]'); // for input
const productItemCalc = productListItem.querySelector('.item__calc'); //for imput
const productItemPrice = productListItem.querySelector('.item__price');

//Checkboxes
const terminalListItem = document.querySelector('[data-id="accounting"]'); // for checkbox terminal
const terminalItemPrice = terminalListItem.querySelector('.item__price');

//Summary
const totalSummary = document.querySelector('.summary__total');
const totalPrice = document.querySelector('.total__price');


//input function
let productSum = 0;
function onPress(event){
    productSum = producsInput.value * prices.product
    productListItem.classList.add('open');
    productItemCalc.innerText = producsInput.value + ' * $'+ prices.product; //zmienna price
    productItemPrice.innerText = '$' + productSum; //zmienna price
    //summary(); // wywołanie summary
    if (producsInput.value.length === 0){
        productListItem.classList.remove('open');
    }

};

// function onClick(event){
//     productListItem.innerText = producsInput.value;
// };

producsInput.addEventListener('input', onPress);



//dropdownlist function
const packageListItem = document.querySelector('[data-id="package"]'); // for dropdown list
let packageSum = 0;

calcSelect.addEventListener('click', function (event){
    calcSelect.classList.toggle('open');

    [...dropDownList].forEach(function(element, index){
        element.addEventListener('click', function (event){
        listField.innerText = element.innerHTML;
        packageListItem.classList.add('open');
        packageListItem.querySelector('.item__calc').innerText = element.innerHTML;
        //summary(); //wywołanie sumy summary();
            //let packageSum = 0
            if (element.innerHTML === 'Basic'){
                packageSum = prices.package.basic;
                packageListItem.querySelector('.item__price').innerText = '$'+ packageSum;//prices.package.basic;
            }
            if (element.innerHTML === 'Professional'){
                packageSum = prices.package.professional;
                packageListItem.querySelector('.item__price').innerText = '$'+ packageSum;//prices.package.professional;
            }
            if (element.innerHTML === 'Premium') {
                packageSum = prices.package.premium;
                packageListItem.querySelector('.item__price').innerText = '$' + packageSum;//prices.package.premium;
            };
            //return packageSum;
        });
    
    });
    

});


//checkboxes
let accountingSum = 0;
accountingCheckbox.addEventListener('click', function (event){  //true or false
    
    let accountingSum = prices.accounting;
    if (accountingCheckbox.checked===true){
        //summary();
        terminalListItem.classList.add('open');
        terminalItemPrice.innerText = '$'+accountingSum;
        accountingSum = prices.accounting;
        
    } else {
        terminalListItem.classList.remove('open');
        terminalItemPrice.innerText = 0;
        accountingSum = 0;
        //totalSummary.classList.remove('open');
    };
    //accountingSum;
    console.log("accounting box checked: " + accountingCheckbox.checked);
});

terminalCheckbox.addEventListener('click', function (event){  //true or false
    console.log("rental box checked: " + terminalCheckbox.checked);
});

//console.log(terminalListItem.item__price);

// Summary

const calcSumary = document.querySelector(".item__price");

// calcSumary.addEventListener('change', function(event){
//     totalSummary.classList.add('open');
//     let sum = productSum + packageSum + accountingSum;
//     totalPrice.innerText = '$' + sum;
//     if (sum === 0){
//         totalSummary.classList.remove('open')};
// });
function summary(){
    totalSummary.classList.add('open');
    let sum = productSum + packageSum //+ accountingSum;//dodać pozostałe wyniki
    
    totalPrice.innerText = '$' + sum;
    // if (sum === 0){
    //     totalSummary.classList.remove('open');
    // } else {totalSummary.classList.add('open');};
    //console.log(summary());
};

function summmm(){
    productSum + packageSum //+ accountingSum;//dodać pozostałe wyniki
    
    console.log(productSum + packageSum);
};


console.log(productSum + packageSum);