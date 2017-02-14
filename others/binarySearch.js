Array.prototype.toTwenty = function() {
    return Array.from(Array(20), (v,i) => i+1)
}

Array.prototype.toForty = function() {
 return Array.from(Array(40), (v,i) => i+1);
};

Array.prototype.toOneThousand = function() {
   return Array.from(Array(100), (v,i) => i+1);
};

Array.prototype.search = function search(item, list=this ) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
};

[1,2,3,6].search(7);