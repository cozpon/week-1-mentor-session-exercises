/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
function reverseString(str) {
    if (typeof str !== "string"){
    	return null;
    } else {
    	return str.split("").reverse().join("");
}
};
console.log(reverseString("hello"));

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function makeAlphabet(str) {
		if (typeof str === "string"){
			return str.split("").sort().join("");
		} else (typeof str !== "string")
			return null;  
};
console.log(makeAlphabet("the quick brown fox jumped over the lazy dog"));

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function aeiouCounter(str){
 	var vowelsCount = 0;
 	var string = str.toString();
 	if (typeof str !== "string"){
 		return null;
 	}
 	  for (var i = 0; i<= string.length -1; i++) {
 		if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
 			vowelsCount +=1;
 		}
 	}
 		return vowelsCount;
};
console.log(aeiouCounter("Hammer Time"));
 

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */


function convertTimeFormat(str){
 	if (typeof str !== "number") {
		return null;
	};
	var hours = Math.floor(str/60);
	var mins = str % 60; 
	return hours + ":" + mins;
	
	
};

console.log(convertTimeFormat("68"));


//works everywhere else, just can't get npm test to register



 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */



function repeat(str, num){
	if (typeof str !== "string" && typeof num !== "number") {
		return null;
	};
	if (num < 0) return "";
	var result = "";
	while (num > 1) {
		if (num & 1) result += str;
		num >>= 1, str += str;
	}
	return result + str;
}

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: reverseString,
    alphaOrder: makeAlphabet,
    vowelCount: aeiouCounter,
    timeConvert: convertTimeFormat,
    repeatString: repeat
}
