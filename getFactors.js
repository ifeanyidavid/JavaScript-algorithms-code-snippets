function getFactors(num){
    num = parseInt(num, 10); // convert the input to a string

    if(num < 1) return -1; // check if the input is a number
    
    var result = []; // Array to store the result
    
	for(var i = num; i>0; i--){ // loop starting from the number going backwards until 1

		if(num % i === 0){

            result.push(i); // Push factors into the results array
            
        }
    }
    return result;
}

function groupArray(arr, groupCount){
    var group = []; // Create an array to store the result of the group
    for(var i=0; i<arr.length; i +=groupCount){

        group.push(arr.slice(i, i+groupCount)); //Create sub array and push it into the group array
    }
    return group;
}

function doMatrixFactors(passedString){
		passedString = passedString.toString();
    var numArr = passedString.split(',');  // Generate an array from the input string
    var numArrLength = numArr.length;
    var result = [];

    var factors = getFactors(numArrLength).reverse(); // Get the factors of the length of the array and reverse it
	
		if(factors.length > 2){
			factors.shift(); // Remove the first element from the factors array
    	factors.pop(); // Remove the last element form the factors array
		}

    return groupArray(numArr, factors[0]); // Create an array of the grouped array

}

console.log(doMatrixFactors("1,3,6,3,4,6"));

