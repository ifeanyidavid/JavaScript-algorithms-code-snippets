function countStringOccurence (testString) {
  if (typeof testString === "string") {
    var count = {};
    stringLength = testString.length;
		var re = /^[A-z]+$/;
		
    for (var i = 0; i < stringLength; i++) {
      var currentChar = testString[i].toLowerCase();
			
      if (currentChar.match(re)) {
				
        if (!(currentChar in count)) {
					count[currentChar] = 1; 
				} else {
					count[currentChar]++;
				}
      }
    }
    return count;
  }
  else {
    return null;
  }
}

var result = countStringOccurence('This is Andela');

  var keys = [];
  var k, i, len;

for (k in result) {
  if (result.hasOwnProperty(k)) {
    keys.push(k);
  }
}

keys.sort();

len = keys.length;

for (i = 0; i < len; i++) {
  k = keys[i];
  console.log(k + ' ' + result[k]);
}
