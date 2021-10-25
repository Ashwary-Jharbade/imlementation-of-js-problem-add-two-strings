/**
 * description: Function cheks if the passed string is valid or not
 * arguments: Function accepts argumnet of type string
 * returns : Function returns boolean value
*/
var isValidString = function ( str ) {
	if (str && str.constructor.name === 'String') {
		return false;
	}
	return true;
}

/**
 * description: Function reverses the passed string
 * arguments: Function accepts a parameter of type string
 * return: Function return a value of type string which is reverse of the passed strings
*/
 var reverseString = function ( str ) {
    return str.split("").reverse().join("");
}

/**
 * description: Function iterates over thr string character and does the addition
 * arguments: Function accepts two parameter of type string
 * return: Function return the addition of passed two strings
*/
var addition = function(a, b) {
	var n1 = a.length;
    var num1 = reverseString(a);
    var num2 = reverseString(b);
	var carry = 0;
	var result = "";
	for (let i=0; i<n1; i++) {
		var sum;
		var alterNum2 = num2[i];
		if (alterNum2 === undefined) {
			alterNum2 = 0;
		}
		sum = (num1[i] * 1) + (alterNum2 * 1) + (carry * 1) +"";
        if (sum.length > 1) {
            carry = sum[0];
		    result = sum[1] + result;
        } else {
            carry = 0;
            result = sum + result;
        }
	}
    if (carry !== 0) {
        result = carry + result;
    }
    return result;
}

/**
 * description: Function add two strings
 * arguments: Function accepts two parameter of type string
 * return: Function return a value of type string which is the addition of two strings
*/
var addStrings = function(num1, num2) {
	if (isValidString(num1) && isValidString(num1)) return "Not a valid string";
    var n1 = num1.length;
	var n2 = num2.length;
    if (n1 < 15 &&  n2 < 15) {
        return ((num1 * 1) + (num2 * 1) + "");
    }
	var result = "";
	if (n2 > n1) {
		result = addition(num2, num1)
	} else {
		result = addition(num1, num2)
	}
	return result;
};  

// addStrings function call with two arguments
console.log(addStrings('1','210'));