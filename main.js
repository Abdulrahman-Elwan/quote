
let dataValue = document.getElementById("inputValue");

// *************************
// *************************
// *************************
// 1- Write a program that allow to user enter number then printit
// function sendValue(){
//     alert(dataValue.value);
// }



// *************************
// *************************
// *************************
// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// function sendValue(){
//     if(dataValue.value%3 == 0 && dataValue.value%4 == 0){
//         alert("Yes");
//     }else{
//         alert("No");
//     }
// }



// *************************
// *************************
// *************************
// 3- Write a program that allows the user to insert 2 integers then print the max
// function printMaxNumber(x , y){
//     if(x >= y){
//         console.log(x);
//     }else{
//         console.log(y);
//     }
// }
// function sendValue(){
//     printMaxNumber(100 , 20);
// }



// *************************
// *************************
// *************************
// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// function sendValue(){
//     if(dataValue.value > 0){
//         alert("Positive");
//     }else if(dataValue.value < 0){
//         alert("Negative");
//     }else{
//         alert("Neutral");
//     }
// }



// *************************
// *************************
// *************************
// 5- Write a program that take 3 integers from user then print the max element and the min element.
// function printMaxMinElement(x , y , z){
//     let max;
//     let min;
//     if(x > y && x > z){
//         max = x;
//     }if(x < y && x < z){
//         min = x;
//     }if(y < x && y < z){
//         min = y;
//     }if(y > x && y > z){
//         max = y;
//     }if(z < x && z < y){
//         min = z;
//     }if(z > x && z > y){
//         max = z;
//     }
//     return("max= " + max + " ----- " + "min= " + min  );
// }
// function sendValue(){
//     console.log(printMaxMinElement(7 , 8 , 5));
//     ;
// }



// *************************
// *************************
// *************************
// 6,7- Write a program that allows the user to insert integer number then check If a number is oven or odd
// function sendValue(){
//     if(dataValue.value%2 == 0){
//         alert("Output: even");
//     }else{
//         alert("Output: odd");
//     }
// }



// *************************
// *************************
// *************************
// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// function sendValue(){
//     let vall = dataValue.value;
//     if(vall == "a" || vall== "A" || vall== "e" || vall== "E" || vall== "i" || vall== "I" || vall== "o" || vall== "O" || vall== "u" || vall== "U"){
//         alert("vowel");
//     }else{
//         alert("Consonant");
//     }
// }



// *************************
// *************************
// *************************
// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number
// function sendValue(){
//     let num = dataValue.value;
//     for(let i=1 ; i<=num ; i++){
//         console.log(i);
//     }
// }



// *************************
// *************************
// *************************
// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// function sendValue(){
//     let num = dataValue.value;
//     for(let i =1 ; i <= 12 ; i++){
//         console.log(num*i);
//     }
// }



// *************************
// *************************
// *************************
// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
// function sendValue(){
//     let num = dataValue.value;
//     for(let i = 1 ; i<=num ; i++){
//         if(i%2 == 0){
//             console.log(i);
//         }
//     }
// }



// *************************
// *************************
// *************************
// 12- Write a program that take two integers then print the power
// function printPower(num1 , num2){
//     let power = 1;      //  انا خليته بيساوي 1 لان ال 1 محايد ضربي 
//     for(let i = 0 ; i<num2 ; i++){
//         power *= num1;
//     }
//     return(power);
// }
// function sendValue(){
//     console.log(printPower(4 , 3));
// }



// *************************
// *************************
// *************************
// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// function total_marks(x , y , z , a , m){
//     total = x + y + z + a + m;
//     return total;
// }
// function average_marks(x , y , z , a , m){
//     let total = total_marks(x , y , z , a , m);
//     average = (total/2);
//     return average;
// }
// function percentage_marks(x , y , z , a , m){
//     let total = total_marks(x , y , z , a , m);
//     percentage = ((total/500)*100);
//     return percentage;
// }
// function sendValue(){
//     console.log("Total marks = " + total_marks(95 , 76 , 58 , 90 , 89));
//     console.log("Average Marks = " + average_marks(95 , 76 , 58 , 90 , 89));
//     console.log("Percentage = " + percentage_marks(95 , 76 , 58 , 90 , 89) + "%");
// }



// *************************
// *************************
// *************************
// 13- Write a program to input month number and print number of days in that month.
// function sendValue(){
//     let month = dataValue.value;
//     if(month == 1){
//         alert("Days in Month: 31");
//     }else if(month == 2){
//         alert("Days in Month: 28");
//     }else if(month == 3){
//         alert("Days in Month: 31");
//     }else if(month == 4){
//         alert("Days in Month: 30");
//     }else if(month == 5){
//         alert("Days in Month: 31");
//     }else if(month == 6){
//         alert("Days in Month: 30");
//     }else if(month == 7){
//         alert("Days in Month: 31");
//     }else if(month == 8){
//         alert("Days in Month: 31");
//     }else if(month == 9){
//         alert("Days in Month: 30");
//     }else if(month == 10){
//         alert("Days in Month: 31");
//     }else if(month == 11){
//         alert("Days in Month: 30");
//     }else if(month == 12){
//         alert("Days in Month: 31");
//     }else{
//         alert("error");
//     }
// }



// *************************
// *************************
// *************************
// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// function sendValue(){
//     // انا استخدمت هنا function percentage_marks اللي عملتها في السؤال 12 بدل ما اكرر الكود تاني 

//     //                                Physics , Chemistry , Biology , Mathematics , Computer
//     let percentage = percentage_marks(  90    ,    77     ,    85   ,      95     ,    93);
//     if(percentage >= 90 && percentage < 100){
//         alert("Grad A")
//     }else if(percentage >= 80){
//         alert("Grad B")
//     }else if(percentage >= 70){
//         alert("Grad C")
//     }else if(percentage >= 60){
//         alert("Grad D")
//     }else if(percentage >= 40){
//         alert("Grad E")
//     }else if(percentage < 40){
//         alert("Grad F")
//     }else{
//         alert("error")
//     }
// }



// *************************
// *************************
// *************************
// 15- Write a program to print total number of days in month
// function sendValue(){
//     let month = dataValue.value;
//     switch (month) {
//         case "1":
//             alert("Days in Month: 31");
//             break;
//         case "2":
//             alert("Days in Month: 28");
//             break;
//         case "3":
//             alert("Days in Month: 31");
//             break;
//         case "4":
//             alert("Days in Month: 30");
//             break;
//         case "5":
//             alert("Days in Month: 31");
//             break;
//         case "6":
//             alert("Days in Month: 30");
//             break;
//         case "7":
//             alert("Days in Month: 31");
//             break;
//         case "8":
//             alert("Days in Month: 31");
//             break;
//         case "9":
//             alert("Days in Month: 30");
//             break;
//         case "10":
//             alert("Days in Month: 31");
//             break;
//         case "11":
//             alert("Days in Month: 30");
//             break;
//         case "12":
//             alert("Days in Month: 31");
//             break;
//         default:
//             alert("error");
//             break;
//     }
// }



// *************************
// *************************
// *************************
// 16- Write a program to check whether an alphabet is vowel or consonant
// function sendValue(){
//     let char = dataValue.value;
//     let charVal = char.toLowerCase();
//     switch (charVal) {
//         case "a":
//             alert("vowel");
//             break;
//         case "e":
//             alert("vowel");
//             break;
//         case "i":
//             alert("vowel");
//             break;
//         case "o":
//             alert("vowel");
//             break;
//         case "u":
//             alert("vowel");
//             break;
//         default:
//             alert("consonant");
//             break;
//     }
// }



// *************************
// *************************
// *************************
// 17- Write a program to find maximum between two numbers
// function sendValue(){
//     let x = 10;
//     let y = 11;
//     switch (maxNumber) {
//         case (x > y):
//             alert(x);
//             break;
//         default:
//             alert(y)
//             break;
//     }
// }



// *************************
// *************************
// *************************
// 18- Write a program to check whether a number is even or odd
// function sendValue(){
//     let number = dataValue.value;
//     let division = number%2;
//     switch (division) {
//         case 0:
//             alert("Number is even")
//             break;
//         default:
//             alert("Number is odd")
//             break;
//     }
// }



// *************************
// *************************
// *************************
// 19- Write a program to check whether a number is positive or negative or zero
// function sendValue(){
//     let number = dataValue.value;
//     switch (true) {
//         case (number === 0):
//             alert("Number is zero");
//             break;
//         case (number > 0):
//             alert("Number is positive");
//             break;
//         case (number < 0):
//             alert("Number is negative");
//             break;
//         default:
//             alert("error");
//             break;
//     }
// }



// *************************
// *************************
// *************************
// 20- Write a program to create Simple Calculator 
// function sendValue(){
//     let x = 10;
//     let y = 30;
//     let operator = dataValue.value;
//     switch (operator) {
//         case "+":
//             alert(x + y)
//             break;
//         case "-":
//             alert(x - y)
//             break;
//         case "*":
//             alert(x * y)
//             break;
//         case "/":
//             alert(x / y)
//             break;
//         default:
//             break;
//     }
    
// }



let quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        person: "Oscar Wilde",
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        person: "Marilyn Monroe",
    },
    {
        quote: "So many books, so little time.",
        person: "Frank Zappa",
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        person: "Albert Einstein",
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        person: "Marcus Tullius Cicero",
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        person: "Robert Frost",
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        person: "Mark Twain",
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        person: "Mahatma Gandhi",
    },
    {
        quote: "“We accept the love we think we deserve.”",
        person: "Stephen Chbosky",
    },
    {
        quote: "“Without music, life would be a mistake.”",
        person: "Friedrich Nietzsche",
    }
];

let testIndex = -1;
let quoteDiv = document.getElementById("quoteDiv");
quoteDiv.innerHTML = "";
function sendValue(){
    let index = Math.floor(Math.random() * quotes.length)
    if(index != testIndex || index == 0){
        quoteDiv.innerHTML=`
            <div class="quotetext fade-in" >
                <p>${quotes[index].quote}</p>
                <h2>${quotes[index].person}</h2>
            </div>
        `
        testIndex = index;
    }else{
        if(index != (quotes.length-1)){
            quoteDiv.innerHTML=`
                <div class="quotetext fade-in" >
                    <p>${quotes[index+1].quote}</p>
                    <h2>${quotes[index+1].person}</h2>
                </div>
            `
            testIndex = index+1;
        }else{
            quoteDiv.innerHTML=`
                <div class="quotetext fade-in" >
                    <p>${quotes[index-1].quote}</p>
                    <h2>${quotes[index-1].person}</h2>
                </div>
            `
            testIndex = index-1;
        }
    }
}