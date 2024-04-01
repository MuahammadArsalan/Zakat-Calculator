
let para1 = document.querySelector('#cash');
let para2 = document.querySelector('#gram');
let para3 = document.querySelector('#price');
// let val = document.querySelector('#val');
let div = document.querySelector('#render');

function zakat(){
    
//     let calc = `${+para2.value * +para3.value + +para1.value } `
    
//     let gen = `${+calc / 2.5}`
    
//     console.log(para1.value);
//     console.log(para2.value);
//     console.log(para3.value);

// console.log(calc);
// console.log(gen);


let cash = `${+para1.value / 100 * 2.5}`
// console.log(cash);
let gold = `${para2.value * para3.value}`
let gold1 = `${gold / 100 * 2.5}`
let total = `${+cash + +gold1}`
console.log(total);
// console.log(gold);
// console.log(gold1);



    div.innerHTML = ` <div id="div">
    <div id="div2"> Your zakat value of cash in hand is ${cash}/= PKR </div>
    <div id="div3"> Your zakat value of gold is ${gold1}/= PKR </div>
    <div id="div4">The Grand Total zakat value is ${total}/= PKR </div>
    </div>`


}

























