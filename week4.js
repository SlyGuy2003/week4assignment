// step 1: creating an array defined 'ages'
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
// A. subtracting the first element from the last element
console.log(ages[ages.length - 1] - ages[0])

// B. adding an element to ages & repeting to prove its programmatic
ages.push(7)
console.log(ages[ages.length - 1] - ages[0])

// C. finding the average value in ages with a loop
var agesTotal = 0
for (let i = 0; i < ages.length; i++) {
    agesTotal += ages[i]
}
console.log(agesTotal / ages.length) //printing the average value

// step 2: create an array defined 'names'
var names =  ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// B. calculating average amount of charactors per name
var nameLength = 0 
 for (let i = 0; i < names.length; i++){ // loop goes through each element and counts the amount of charactors in array
    currentName = names[i]
    nameLength += currentName.length
 }
 console.log(nameLength / names.length) // printing the average amount of charactors

 // C. concatenating all the names in names together with a space
 var namesStr = ''
 for (let i = 0; i < names.length; i++){ //loops goes through each element and creates a new string concatinating all the elements together
    namesStr += `${names[i]} `
 }
console.log(namesStr) // prints the new string to console

//step 3: How do you access the last element of any array?
console.log('exampleArray[exampleArray.length - 1]')
//step 4: How do you access the first element of any array?
console.log('exampleArray[0]')

//step 5 : create a new array and copy the lengths of each element from names to each element of nameLengths
var nameLengths = []
for (let i = 0; i < names.length; i++){ // loop counts the length of each string and adds the length to a new array
    currentName = names[i]
    let currentNameLength = currentName.length
    nameLengths.push(currentNameLength)
 }
console.log(nameLengths)// prints the array created to the console

// step 6: a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
var sumOfnameLengths = 0
for (let i = 0; i < nameLengths.length; i++){ 
    sumOfnameLengths += nameLengths[i]
}
console.log(sumOfnameLengths)
//step 7: function: takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
const repeatMyWord = (word, n) => {
    let repeatedWord = ''
    for (let i = 0; i < n; i++){ // loop that creates a new string 
        repeatedWord += `${word}`
        }
    return(repeatedWord) // returns the string created by the loop
}
console.log(repeatMyWord('Super!', 5)) // calls repeatMyWord

// step 8:  function: takes two parameters, firstName and lastName, and returns a full name
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}` // returns a new string, combining the variables 
}

console.log(fullName('Jhonny', 'Hancock')) //calls fullName

// step 9: function, takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
var numberArray2 = [4, 5, 6, 7, 8, 9, 9, 9, 24, 45, 76]

const largerThanOneHundred = (numArray) => {
    let numSum = 0
    for (let i = 0; i < numArray.length; i++){ //loops through all of the elements of the array and adds them together
        numSum += numArray[i]
    }
   return numSum > 100 // returns true if numSum is greater than 100
}


console.log(largerThanOneHundred(numberArray))

//step 10: function, takes an array of numbers and returns the average of all the elements in the array
const averageValue = (numArray) => {
    var numTotal = 0
    for (let i = 0; i < numArray.length; i++) {
    numTotal += numArray[i]
    }
return(numTotal / numArray.length)
}

console.log(averageValue(numberArray))

//step 11: takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const greaterAvg = (numArray1, numArray2) =>{
    var numTotal1 = 0
    for (let i = 0; i < numArray1.length; i++) {
    numTotal1 += numArray1[i]
    } 
    numArrayAvg1 = numTotal1 / numArray1.length
    var numTotal2 = 0
    for (let i = 0; i < numArray2.length; i++) {
    numTotal2 += numArray2[i]
    }
    numArrayAvg2 = numTotal2 / numArray2.length

    return numArrayAvg1 > numArrayAvg2
}

console.log(greaterAvg(numberArray, numberArray2))

//step 12: function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside = true && moneyInPocket >= 10.50){
        return true 
    }
    else{
        return false
    }
}
console.log(willBuyDrink(true, 12))

//step 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
const paycheck = (hoursWorked, hourlyWage) => {
    return `$${hoursWorked * hourlyWage}` // returns the value of the paycheck
}
console.log(paycheck(70, 20)) // assuming you get paid bi-weekly

// I created this function because I get told all the time how people are unsure of how large their paycheck is going to be
