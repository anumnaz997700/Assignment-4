    //   Answer#01

let temp=[45,30,25,32,41,29,32]    
let total=0
for (let i=0 ; i<array.length ;i++){
console.log (temp[i]);
}

total=total+temp[i];
let avg=total/temp.length;

let aboveAverage=0;
for (let i=0 ;i<temp.length;i++){
    if(temp[i]>average){
    aboveAverage++;
}
}


    //    Answer#02

let marks=[77,52,40,65,32] 

for(i=0;i<marks.length;i++){
    console.log("Original Marks",marks[i]);
}

for (i=marks.length-1;i>=0;i--){
    console.log("Reverse Marks",marks[i]);
}

let highest=marks[0]
let lowest=marks[4]
let passed=0

for(i=0;i<marks.length;i++){
  if(marks[i]>highest){
    highest=marks[i];
  }

  if(marks[i]<lowest){
    lowest=marks[i];
  }
  if(marks[i]>=50){
    passed++;
  }
}
console.log("Highest Marks=",highest)
console.log("Lowest Marks=",lowest)
console.log("Passed Marks=",passed)

    //  Answer#03

let sales = [
 [12000, 15000, 11000, 14000],
 [10000, 18000, 16000, 13000],
 [17000, 14000, 19000, 16000]
];
let grandTotal = 0;
let highestBranchTotal = 0;
let highestBranch = 0;

for (let i = 0; i < sales.length; i++) {
 let branchTotal = 0;
 console.log(i)

for(let j = 0; j < sales[i].length; j++)
    console.log(j ,sales[i][j])

    //   Answer#04

let stops = [12, 18, 25, 31, 44, 52];

for (let i = 0; i < stops.length; i++) {
 console.log("Original Stops=",stops[i]);
}

for (let i = stops.length - 1; i >= 0; i--) {
 console.log("Reversed Stops=",stops[i]);
}

        //  Answer#05

let code = prompt("Enter a product code:");

let originalCode = code.toLowerCase();
let reversedCode = "";

for (let i = originalCode.length - 1; i >= 0; i--) {
    reversedCode = reversedCode + originalCode[i];
}
console.log(code);

if (originalCode === reversedCode) {
    console.log("This is a palindrome.");
} else {
    console.log("This is not a palindrome.");
}


        //  Answer#06
  
function   calculateFinalPrice(originalPrice,discountPercent)
let discountAmount = originalPrice * discountPercent /100;
let finalPrice = originalPrice-discountPercent
return finalPrice;

let result = calculateFinalPrice(5000,20);
console.log(result);

        // Answer#07

function calculateBill(itemPrice, quantity) {
let totalCost = itemPrice * quantity;
return totalCost;
}

let result = calculateBill(350, 4);

console.log(result);


    //    Answer#08

function  studentsGrade(marks) {
  if(marks=<100 && marks>=85){
    return("Grade A");
  }else if(marks>=70){
    return("Grade B");
  }else if(marks>=50){
    return("Grade C");
  }else{
    return("Fail");
  }
} 

let result = studentsGrade(78);
console.log(result);


      // Answer #09

function calculateDeliveryCharge(orderAmount, distance){
let deliveryCharge = 0;

if(orderAmount>= 2000 && distance<= 5){
    deliveryCharge = 0;
}else{

if(orderAmount< 2000 && distance<= 5){
     deliveryCharge = 100;
}else{
    deliveryCharge = 100+(distance - 5)* 20;
}
}
return deliveryCharge;
}

let orderAmount = 1800;
let distance = 8;
let charge = calculateDeliveryCharge(orderAmount, distance);

let finalBill = orderAmount + charge;
console.log(charge);
console.log(finalBill);

    //   Answer#10

function weeklySummary(sales) {
let total = 0;
let targetDays = 0;
for (let i = 0; i < sales.length; i++) {
    total = total + sales[i];
if (sales[i] >= 10000) {
    targetDays++;
}
}
let average = total / 7;
return {
    totalSales: total,
    averageSales: average,
    targetDays: targetDays
};
}
let weeklySales = [91200, 12056, 10000, 8003, 15099, 11000, 7500];
let result = weeklySummary(weeklySales);
console.log( result.totalSales);
console.log(result.averageSales);
console.log(result.targetDays);
if(result.averageSales >= 10000) {
    console.log("The average daily target was achieved.");
}else{
    console.log("The average daily target was not achieved.");
}    