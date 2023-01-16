//variables

const dropDownList = document.querySelector('.select__dropdown').children; //dropdown list changet into array
const calcSelect = document.querySelector('.calc__select'); //calc-select - for dropdown list
const listField = document.querySelector('.select__input'); // for dropdown list
const liElements = document.querySelectorAll('[data-value]'); // propably unnecessary

const producsInput = document.querySelector('#products'); // for inputs
const ordersInput = document.querySelector('#orders'); // for inputs

const accountingCheckbox = document.querySelector('#accounting'); // for checkbox1
const terminalCheckbox = document.querySelector('#terminal'); // for checkbox1


//dropdownlist function
calcSelect.addEventListener('click', function (event){
    calcSelect.classList.toggle('open');

[...dropDownList].forEach(function(element){
    element.addEventListener('click', function (event){
    listField.innerText = element.innerHTML;
        });
    });
});


//input fields

//const test1 = document.querySelector('.test1'); 
//const dupa = document.querySelector('.dupa'); //class'item__calc'
const dupaListItem = document.querySelectorAll('.list__item');
//const productListItem = dupaListItem(0);

console.log(dupaListItem);
//console.log(inputNumbers+1);
//console.log(test1);
//console.log(dupa);

function onPress(event){
    dupaListItem.classList.add('open');
    productListItem.innerText = producsInput.value;
};

function onClick(event){
    productListItem.innerText = producsInput.value;
};

producsInput.addEventListener('input', onPress);
//producsInput.addEventListener('mouseup', onPress);


// inputNumbers.addEventListener('keyup', function(event){
//     dupaListItem.classList.add('open');
//     dupa.innerText = inputNumbers.value;
    
// });
// inputNumbers.addEventListener('mouseup', function(event){
    
//     dupa.innerHTML = inputNumbers.value;
// });

//dupa.innerText = inputNumbers.value * 0.5;

//checkboxes

accountingCheckbox.addEventListener('change', function (event){  //true or false
    if (accountingCheckbox.checked===true){
        document.querySelector('[data-id="accounting"]').classList.add('open'); //mayby add variable = document.querySelector('[data-id="accounting"]')?
    } else
    {document.querySelector('[data-id="accounting"]').classList.remove('open');}
    console.log("accounting box checked: " + accountingCheckbox.checked);
});

terminalCheckbox.addEventListener('click', function (event){  //true or false
    console.log("rental box checked: " + terminalCheckbox.checked); // tylko do sprawdzenia w konsoli
});

