// membuat segitiga
function createTriangle(height) {
    var counter = 1;
    for (var i = 1; i <= height; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += counter.toString().padStart(2, "0") + " ";
            counter++;
        }
        console.log(row);
    }
}
createTriangle(4);

// multiples of 3 with fizz, buzz, fizzbuzz
function fizzBuzz(n) {
    var result = "";
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz, ";
        } else if (i % 3 === 0) {
            result += "Fizz, ";
        } else if (i % 5 === 0) {
            result += "Buzz, ";
        } else {
            result += i + ", ";
        }
    }
    result = result.slice(0, -2);
    console.log(result);
}
fizzBuzz(15);

// calculate body mass index 
function calculateBMI(weight, height){
    var bmi = weight / (height * height)
    
    if(bmi < 18.5){
        return " less weight "
    } else if(bmi >= 18.5 && bmi <= 24.9){
        return " ideal "
    } else if(bmi >= 25.0 && bmi <= 29.9){
        return " overweight "
    }else if(bmi >= 30.0 && bmi <= 39.9){
        return " very overweight "
    } else {
        return " obesity "
    }
}
var weight = 98
var height = 1.70
console.log(calculateBMI(weight, height))

// remove number
function removeOddNumbers(array) {
    return array.filter(function(num) {
        return num % 2 === 0;
    });
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeOddNumbers(arr));

// split
function splitStringToWords(str) {
    return str.split(" ");
}
var sentence = "Hello World";
console.log(splitStringToWords(sentence));

