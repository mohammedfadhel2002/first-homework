function generateEmail(name , domain) {
  return name + "@" + domain};

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//Exercise 1: maxOfTwoNumbers()
//In this exercise, create a function named maxOfTwoNumbers. 
//It should take two numbers as inputs and return the larger number. 
//If they're equal, return either one.

//Exercise 1 has been completed for you:

//const maxOfTwoNumbers = (x, y) => {
  //if (x >= y) {
    //return x;
//  } else {
//    return y;
//  }
//   }

// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult()

//Write a function named isAdult. It should take an age (number) 
//and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

//Example: isAdult(21) should return 'Adult'.

function isAdult(age){
    if(age >= 18 ){
        return "Adult"
    }
    else{
        return "Minor"}
        


    }
            console.log('Exercise 2 Result:', isAdult(21));

    
isAdult('25');



//Exercise 3: isCharAVowel()

//Write a function named isCharAVowel that takes a single character as 
//an argument. It should return true if the character is a vowel and 
//false otherwise. For the purposes of this exercise, the character 
//y should not be considered a vowel.

//Example: isCharAVowel('a') should return true.



function isCharAVowel(vowel){
    if(vowel==='a' || vowel==='e' || vowel==='i' || vowel==='o' || vowel==='u' ){return 'true'}else{
        return "false"}}
isCharAVowel('a');
console.log('Exercise 3 Result:', isCharAVowel("a"));



//Exercise 6: maxOfThree()

//Define a function, maxOfThree. It should accept three numbers 
//and return the largest among them.

//Example: maxOfThree(17, 4, 9) should return 17.


function maxOfThree(numbers){
    return Math.max(17 ||4||9)
};

 maxOfThree(17,11,0);
 console.log('exercise 6 result:', maxOfThree(17,4,9));


 

