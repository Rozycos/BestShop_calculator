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
//document.querySelector('#package').addEventListener('mouseup', this.packageInput.bind(this));
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
    this.packagePrice = 0;
    // this.packageItem = document.querySelector('[data-id="package"]');
    // this.itemCalc = this.packageItem.querySelector('.item__calc'); 
    // this.itemCalc.innerText = 'Basic';
    this.summary();
    
    }
//Package dropdown list

Calculator.prototype.packageInput = function () {
   this.calcSelect = document.querySelector('.calc__select');
   this.selectInput = document.querySelector('.select__input');
   this.packageClass = this.summaryVariables.package;
   this.basicName = document.querySelector('.select__dropdown').children[0];
   this.professionalName = document.querySelector('.select__dropdown').children[1];
   this.premiumName = document.querySelector('.select__dropdown').children[2];
   this.selectInput = document.querySelector('.select__input');
   this.calcSelect.classList.toggle('open'); // pokazuje pole wyboru
   this.basicName.addEventListener('click', this.packageBasic.bind(this));
   this.professionalName.addEventListener('click', this.packageProfessional.bind(this));
   this.premiumName.addEventListener('click', this.packagePremium.bind(this));
//    this.basicName.addEventListener('change', this.packageBasic.bind(this));
//    this.professionalName.addEventListener('change', this.packageProfessional.bind(this));
//    this.premiumName.addEventListener('change', this.packagePremium.bind(this));
// this.packageItem = document.querySelector('[data-id="package"]');
//     this.itemCalc = this.packageItem.querySelector('.item__calc'); 


  
}   

//packageBasic function
Calculator.prototype.packageBasic = function () {
	//this.packagePrice = 1111;
    this.basicPrice = this.prices.package.basic;
	this.packageClass.classList.add('open');
	this.selectInput.innerText = this.basicName.innerHTML;
	this.packageClass.querySelector('.item__calc').innerText = this.basicName.innerHTML;
	this.packageClass.querySelector('.item__price').innerText = '$'+ this.basicPrice;
	this.summary();
    return this.packagePrice = this.basicPrice;
	
	//this.packagePrice = 1111;
}

Calculator.prototype.packageProfessional = function () {
	//this.packagePrice = 22222;
    this.professionalPrice = this.prices.package.professional;
	this.packageClass.classList.add('open');
	this.selectInput.innerText = this.professionalName.innerHTML;
	this.packageClass.querySelector('.item__calc').innerText = this.professionalName.innerHTML;
	this.packageClass.querySelector('.item__price').innerText = '$'+ this.professionalPrice;
	this.summary();
    return this.packagePrice = this.professionalPrice;
	//this.summary();
	//this.packagePrice = 22222;
}

Calculator.prototype.packagePremium = function () {
	//this.packagePrice = 22222;
    this.premiumPrice = this.prices.package.premium;
	this.packageClass.classList.add('open');
	this.selectInput.innerText = this.premiumName.innerHTML;
	this.packageClass.querySelector('.item__calc').innerText = this.premiumName.innerHTML;
	this.packageClass.querySelector('.item__price').innerText = '$'+ this.premiumPrice;
	this.summary();
    return this.packagePrice = this.premiumPrice;
	//this.summary();
	//this.packagePrice = 22222;
}
Calculator.prototype.packageSelector = function (){
    this.packageItem = document.querySelector('[data-id="package"]');
    this.itemCalc = this.packageItem.querySelector('.item__calc');    
    //this.packagePrice = 0;
    // this.packagePrice = 0;
    
    // if (this.itemCalc === 'Basic'){return this.packagePrice = 0}
    // if (this.itemCalc === 'Profesional'){return this.packagePrice = this.profesionalPrice}
    // if (this.itemCalc === 'Premium'){return this.packagePrice = this.premiumPrice};
    // if (Number.isInteger(this.packagePrice)){return this.packagePrice = 0};
    
        
        
    this.summaryClass = this.summaryVariables.total;
}

 
//summary    
Calculator.prototype.summary = function (){
    this.packageSelector();
	a = this.productSum + this.orderSum;
    b= this.packagePrice
    sum = a + b;
    this.summaryClass.children[1].innerText = "$" + sum;
	this.summaryClass.classList.add('open')
    if (this.sum > 0){this.summaryClass.classList.add('open')};//else{this.summaryClass.classList.remove('open')};
}    
    

console.log(this.itemCalc)




const calc1 = new Calculator();

calc1.addEvents();
//calc1.summary();
//calc1();
//calc1.packageInput();    
    
console.log(this.sum)
