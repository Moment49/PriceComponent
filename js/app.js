// Price component functionality
const rangeSlider = document.querySelector('#slider');
const bar = document.querySelector('.bar');
const  priceBar = document.querySelector('#amount');
let billType = document.querySelector('#bill_type')
const progressBar = document.querySelector('.bar .fill');
const btnToggle = document.querySelector('#toggle');

//Algorithm to get the discount price of a selected item

//Set the discount percentage
let discountRate = (25 / 100);

//Add an event to the button
//Create a state to check when the button is toggled from monthly to yearly

let isYearlyToggle = false;

//Get the range values from the slider
//Global variable for the range Input value
let range;

//Function to handle the range unput value
function getRange(e){
    //Get the range Input value
    range = rangeSlider.value

    //Create a span tag and append the billType to it
    let span = document.createElement('span');
    span.textContent = billType.textContent;
    priceBar.textContent = `${range}`+ ".00"
    priceBar.appendChild(span)

    //Progress bar to scale the range slider
    let maxVal = rangeSlider.getAttribute("max");
    // console.log((range / maxVal) * 100 + "%");
    progressBar.style.width = ` ${(range / maxVal) * 100}` + "%" ;  
}

//Function to hanlde the toggler and update price
function toggleHandler(){
    let rangeValue;
    let yearlyPrice;
    let discountPrice;
    getRange();

    let spanType = document.createElement('span')
    let spanType2 = document.createElement('span')
    //Test the condition to check the state
    if( btnToggle.classList.value === 'toggle_btn'){

        btnToggle.classList.add('active');
        isYearlyToggle = true; 
        rangeValue = range
        //Set the yearly billing price 
        yearlyPrice = rangeValue * 12;
        console.log(`This is the yearly price ${yearlyPrice}`)

        //Calculate the discount price
        discountPrice = discountRate * yearlyPrice;

        //Calculate the yearly discounted billing price
        yearlyPrice = yearlyPrice - discountPrice;
        console.log(`This is the yearly discounted price${yearlyPrice}`)
        
        //Update the yearly price with the billing
        console.log(billType)
        spanType.className = "year"
        spanType.textContent = '/year';
        console.log(spanType)
        
        //Update the price value 
        priceBar.textContent = `${yearlyPrice}`+ ".00" 
        priceBar.appendChild(spanType)
      
    }else{
        btnToggle.classList.remove('active');
        //Return to the monthly price range
        rangeValue = range

        //add class and update the billing type
        spanType2.className = "month"
        spanType2.textContent = billType.textContent
        priceBar.appendChild(spanType2)
        //Set the toggle state 
        isYearlyToggle = false;
    }
}
btnToggle.addEventListener('click', toggleHandler);
rangeSlider.addEventListener('input', getRange)
rangeSlider.addEventListener('change', getRange)
