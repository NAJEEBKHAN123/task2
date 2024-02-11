
       // Q1 ---->

// var num1 = +prompt("Enter the number:");
// let sum = 0;
// for(let i=num1; i>=1; i--){
//     sum += i;
// }
// console.log(sum);

//     //    Q2------>

// let num1 = +prompt("Enter the first number");
// let num2 = +prompt("Enter the second number");
// let sumRan = 0;
// for(let i = num1; i<= num2; i++){
//     sumRan +=1;
// }
// console.log(sumRan);






    //   Q3------>

    // let num = [34, 45, 76, 34, 65];
    // sum = 0;
    // for(let i=0; i<num.length; i++){
    //     sum += num[i];

    // }
    // var average = num.length > 0 ? sum / num.length : 0;
    // alert("The average is: " + average);




// Q4----->


// var string1 = prompt("Enter the first string:");
// var string2 = prompt("Enter the second string:");

// if (string1.length === string2.length) {
//   alert("Both strings have same number of characters.");
// } else if (string1.length > string2.length) {
//   alert("The 1st string has more characters than the 2nd.");
// } else {
//   alert("The 2nd string has more characters than 1st .");
// }


    // Q5======>

    let str = prompt("Enter the number");
    let lastChar = str.charAt(str.length -1);
    let firstChar = str.charAt(0);

    let between = str.substring(1, str.length - 1);
    let finalLine = lastChar + between + firstChar;
    console.log(finalLine);