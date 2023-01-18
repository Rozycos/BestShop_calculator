function Calculator () {
	//this.name = parr1,
	this.prices = {
		product: 0.5,
		order: 0.25,
		package: {basic: 0, professional: 25, premium: 60},
		accounting: 35,
		terminal: 5,
	},
	this.inputVariables = {
		products: document.querySelector('#products'), // for inputs
		orders: document.querySelector('#orders'), // for inputs
		package: document.querySelector('#package'),//for dropdown list
        dropDownList: document.querySelector('.select__dropdown').children, //dropdown list
        accounting: document.querySelector('#accounting'), // for checkbox1
		terminal: document.querySelector('#terminal'), // for checkbox1
	}
	this.summaryVariables = {
		products: document.querySelector('[data-id="products"]'), 
		orders: document.querySelector('[data-id="orders"]'), 
        package: document.querySelector('[data-id="package"]'),
		accounting: document.querySelector('[data-id="accounting"]'), 
		terminal: document.querySelector('[data-id="terminal"]'),
        total: document.querySelector('#total-price'),
		}
	
}
	/* Inputs Forms */
//addevents
Calculator.prototype.addEvents = function (){
document.querySelector('#products').addEventListener('input', this.productListener.bind(this));
document.querySelector('#orders').addEventListener('input', this.productListener.bind(this));
document.querySelector('#package').addEventListener('click', this.packageInput.bind(this));
//document.querySelector('.select__dropdown').addEventListener('click', this.packageInput.bind(this));

// this.dropdownList = [...this.inputVariables.dropDownList];
// this.dropdownList.forEach(function(element){
//     element.addEventListener('click', this.packageInput.bind(this))
// });

}

Calculator.prototype.productListener = function () {
    this.productValue = this.inputVariables.products.value;
    this.productClass = this.summaryVariables.products;
    this.productSum = this.productValue *this.prices.product;
    this.productClass.querySelector('.item__calc').innerText = this.productValue + "*" + this.prices.product;
    this.productClass.querySelector('.item__price').innerText = "$" + this.productSum;
    if (this.productValue>0){this.productClass.classList.add('open')}else{this.productClass.classList.remove('open')};

    this.orderValue = this.inputVariables.orders.value;
    this.orderClass = this.summaryVariables.orders;
    this.orderSum = this.orderValue *this.prices.order;
    this.orderClass.querySelector('.item__calc').innerText = this.orderValue + "*" + this.prices.order;
    this.orderClass.querySelector('.item__price').innerText = "$" + this.orderSum;
    if (this.orderValue>0){this.orderClass.classList.add('open')}else{this.orderClass.classList.remove('open')};

    this.summary();
    }
//Package dropdown list

Calculator.prototype.packageInput = function () {
    this.packageForm = this.inputVariables.package;
    this.packageClass = this.summaryVariables.package;
    this.dropdownList = [...this.inputVariables.dropDownList];
    this.calcSelect = document.querySelector('.calc__select');
    this.calcSelect.classList.toggle('open'); // pokazuje pole wyboru
    packageClass = this.summaryVariables.package;
    selectInput = document.querySelector('.select__input');
    basicPrice = this.prices.package.basic;
    professionalPrice = this.prices.package.professional;
    premiumPrice = this.prices.package.premium;
    
    
    this.dropdownList.forEach(function(element){
        element.addEventListener('click', function (event){
            
            selectInput.innerText = element.innerHTML;
            packageClass.classList.add('open');
            packageClass.querySelector('.item__calc').innerText = element.innerHTML;
            if (element.innerHTML === 'Basic'){
                
                packageClass.querySelector('.item__price').innerText = '$'+ basicPrice;//prices.package.basic;
                return this.packageSum = basicPrice;
            }
            if (element.innerHTML === 'Professional'){
                
                packageClass.querySelector('.item__price').innerText = '$'+ professionalPrice;//prices.package.professional;
                return this.packageSum = professionalPrice;
            }
            if (element.innerHTML === 'Premium') {
                
                packageClass.querySelector('.item__price').innerText = '$' + premiumPrice;//prices.package.premium;
                return this.packageSum = premiumPrice;
                
            };
        });
        
    });
    this.packageSum = this.prices.package.professional;
    this.summary();
    //this.packageClass.classList.toggle('open'); // pokazuje zieloną belkę

    console.log(this.dropdownList)
    //this.selectInput.innerText = element.innerHTML;
      

    
}

//summary    
Calculator.prototype.summary = function (){
    this.summaryClass = this.summaryVariables.total;
    this.sum = this.productSum + this.orderSum + this.packageSum;
    this.summaryClass.children[1].innerText = "$" + this.sum;
    if (this.sum >0){this.summaryClass.classList.add('open')}else{this.summaryClass.classList.remove('open')};
}    
    



// Calculator.prototype.orderListener = function () {
//     this.orderValue = document.querySelector('#orders').value;
//     document.querySelector('[data-id="orders"]').querySelector('.item__calc').innerText = this.orderValue;
//     document.querySelector('[data-id="orders"]').classList.add('open');
//     }



const calc1 = new Calculator();
//calc1.listeners();
calc1.addEvents();
//calc1.summary();
//calc1();
//calc1.packageInput();    
    
console.log(this.sum)


// // const Calculator = function(inputs){
// //     this.prices = {
// //         product: 0.5,
// //         orders: 0.25,
// //         package: {basic: 0, professional: 25, premium: 60},
// //         accounting: 35,
// //         terminal: 5,
// //     },
// //     this.variables = {
// //         producsInput: document.querySelector('#products'), // for inputs
// //         ordersInput: document.querySelector('#orders'), // for inputs
// //         productListItem: document.querySelector('[data-id="products"]'),
// //         productItemCalc: productListItem.querySelector('.item__calc'), //for imput
// //         productItemPrice: productListItem.querySelector('.item__price'),
// //     }
// // }

// //variables
// const prices = {
//     product: 0.5,
//     orders: 0.25,
//     package: {basic: 0, professional: 25, premium: 60},
//     accounting: 35,
//     terminal: 5,
// };

// const dropDownList = document.querySelector('.select__dropdown').children; //dropdown list changet into array
// const calcSelect = document.querySelector('.calc__select'); //calc-select - for dropdown list
// const listField = document.querySelector('.select__input'); // for dropdown list

// const accountingCheckbox = document.querySelector('#accounting'); // for checkbox1
// const terminalCheckbox = document.querySelector('#terminal'); // for checkbox1

// //input fields
// //const productListItem = document.querySelector('[data-id="products"]'); // for input
// //const productItemCalc = productListItem.querySelector('.item__calc'); //for imput
// //const productItemPrice = productListItem.querySelector('.item__price');

// //Checkboxes
// const terminalListItem = document.querySelector('[data-id="accounting"]'); // for checkbox terminal
// const terminalItemPrice = terminalListItem.querySelector('.item__price');

// //Summary
// const totalSummary = document.querySelector('.summary__total');
// const totalPrice = document.querySelector('.total__price');


// //input function
// //variables for inputs
// //const producsInput = document.querySelector('#products'); // for inputs
// //const ordersInput = document.querySelector('#orders'); // for inputs
// //const products = document.querySelector('#products');

// function CalcInput(inputID){
//     this.name = inputID,
//     this.prices = {
//         product: 0.5,
//         orders: 0.25,
//     },
//     this.inputs = {
//         productsInput: document.querySelector('#products'), // for inputs
//         ordersInput: document.querySelector('#orders'), // for inputs
//     },
//     this.addClassOpen = document.querySelector("[data-id=" + this.name + "]"),
//     this.addClass = function(){
//         this.addClassOpen.classList.add('open')
//         // if (this.producsInput.value.length === 0){
//         // this.addClassOpen.classList.remove('open')};
//     },
//     this.productsInput= document.querySelector("#"+ this.name);
//     this.productItemCalc = this.addClassOpen.querySelector('.item__calc');
    
// }
// //CalcInput.prototype.sum = this.producsInput * this.prices;

// CalcInput.prototype.render1 = function (){
//     document.querySelector("#"+ this.name).addEventListener('input', function(event){
//         this.addClassOpen.classList.add('open');
//     let productSum = 0;
//     productSum = this.productsInput.value //* prices.product;
//     this.productItemCalc.innerText = 'dupa' + productSum//this.productsInput.value //+ ' * $'+ prices.product;}
    
    
//     //productItemCalc.innerText = this.product + ' * $'+ this.order;
//     console.log(this.productItemCalc);
// });
// };
// const calcInput1 = new CalcInput('products');
// const calcInput2 = new CalcInput('orders');
// calcInput1.render1();
// calcInput2.render1();
// //this.productsInput.addEventListener('input', render1);

// // let productSum = 0;
// // function onPress(event){
// //     productSum = producsInput.value * prices.product
// //     productListItem.classList.add('open');
// //     productItemCalc.innerText = producsInput.value + ' * $'+ prices.product; //zmienna price
// //     productItemPrice.innerText = '$' + productSum; //zmienna price
// //     summary(); // wywołanie summary
// //     if (producsInput.value.length === 0){
// //         productListItem.classList.remove('open');
// //     }

// // };

// // // function onClick(event){
// // //     productListItem.innerText = producsInput.value;
// // // };

// //this.producsInput.addEventListener('input', onPress);



// //dropdownlist function
// const packageListItem = document.querySelector('[data-id="package"]'); // for dropdown list
// let packageSum = 0;

// calcSelect.addEventListener('click', function (event){
//     calcSelect.classList.toggle('open');

//     [...dropDownList].forEach(function(element, index){
//         element.addEventListener('click', function (event){
//         listField.innerText = element.innerHTML;
//         packageListItem.classList.add('open');
//         packageListItem.querySelector('.item__calc').innerText = element.innerHTML;
//         summary(); //wywołanie sumy summary();
//             let packageSum = 0
//             if (element.innerHTML === 'Basic'){
//                 packageSum = prices.package.basic;
//                 packageListItem.querySelector('.item__price').innerText = '$'+ packageSum;//prices.package.basic;
//             }
//             if (element.innerHTML === 'Professional'){
//                 packageSum = prices.package.professional;
//                 packageListItem.querySelector('.item__price').innerText = '$'+ packageSum;//prices.package.professional;
//             }
//             if (element.innerHTML === 'Premium') {
//                 packageSum = prices.package.premium;
//                 packageListItem.querySelector('.item__price').innerText = '$' + packageSum;//prices.package.premium;
//             };
//             //return packageSum;
//         });
    
//     });
    

// });


// //checkboxes
// let accountingSum = 0;
// accountingCheckbox.addEventListener('input', function (event){  //true or false
    
//     let accountingSum = prices.accounting;
//     if (accountingCheckbox.checked===true){
//         //summary();
//         terminalListItem.classList.add('open');
//         terminalItemPrice.innerText = '$'+ accountingSum;
        
//         summary();
//         //return accountingSum = prices.accounting;
//     } else {
//         terminalListItem.classList.remove('open');
//         terminalItemPrice.innerText = 0;
//         totalSummary.classList.remove('open');
//         //return accountingSum = 0;
        
//     };
//     //accountingSum;
//     console.log("accounting box checked: " + accountingCheckbox.checked);
// });

// terminalCheckbox.addEventListener('click', function (event){  //true or false
//     console.log("rental box checked: " + terminalCheckbox.checked);
// });

// //console.log(terminalListItem.item__price);

// // Summary

// const calcSumary = document.querySelector(".item__price");

// // calcSumary.addEventListener('change', function(event){
// //     totalSummary.classList.add('open');
// //     let sum = productSum + packageSum + accountingSum;
// //     totalPrice.innerText = '$' + sum;
// //     if (sum === 0){
// //         totalSummary.classList.remove('open')};
// // });
// function summary(){
//     totalSummary.classList.add('open');
//     let sum = 0;//productSum + packageSum + accountingSum;//dodać pozostałe wyniki
//     sum = productSum + packageSum + accountingSum;
//     totalPrice.innerText = '$' + sum;
//     return sum;
//     // if (sum === 0){
//     //     totalSummary.classList.remove('open');
//     // } else {totalSummary.classList.add('open');};
//     //console.log(summary());
// };

// function summmm(){
//     productSum + packageSum //+ accountingSum;//dodać pozostałe wyniki
    
//     console.log(productSum + packageSum);
// };


// //console.log(productSum + packageSum);