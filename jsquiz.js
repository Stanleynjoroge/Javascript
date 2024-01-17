//Question one Run in brwoser console
function guessNumber() {
    let myNumber = 5;
    const userInput = parseInt(prompt("enter a number"))
    if (myNumber === userInput) {
        console.log("Good guess")
    }
    else {
        console.log("Not matched")
    }
}
guessNumber();

//Question two
function exam() {
    let cat1 = parseInt(prompt("Enter cat one"))
    let cat2 = parseInt(prompt("Enter cat2"))
    let final = parseInt(prompt("Enter Final exam"))
    if (cat1 => 89)
        console.log("true")

    else {

        console.log("false")
    }
    if (cat2 => 89)
        console.log("true")
    else {

        console.log("false")
    }
    if (final => 90) {
        console.log("true")
    } else {
        console.log("false")
    }
}
exam();
// question three
//explanation

let obj = {};// empty object has been created and assignment of keys and values has been done below


obj[1] = 'One';// key 1 and value 'One'


obj['1'] = 'String One';// key '1' and value 'String One'

// Output the value of the property with key 1
console.log(obj[1]);  // Output: 'One'

// Output the value of the property with key '1'
console.log(obj['1']);  // Output: 'String One'

// asks the program to Compare the values of the properties with different keys
console.log(obj[1] === obj['1']);  // Output: false // key 1 and '1' are not the same thing
