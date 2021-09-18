'use strict';

// O(n) time solution
// O(1) space time

function moveElementToEnd(array, toMove) {
	let index = 0;
	let count = 0;
	while(index > -1) {
		index = array.findIndex(each => each === toMove);
		if (index  > -1) {
			array.splice(index, 1);
			count++;
		}
	}
	for(let i = 0; i < count;i++) {
		array.push(toMove);
	}
 	return array;	
}



function moveElementToEnd(array, toMove) {
  // Write your code here.
	let lp = 0;
	let rp = array.length -1;
	while(lp < rp) {
		while (lp < rp && array[rp] === toMove) {
			rp--;
		}
		if (array[lp] === toMove) {
			[ array[lp], array[rp] ] = [ array[rp], array[lp] ];
		}
		lp++;
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;


// Do not edit the line below.
module.exports = moveElementToEnd;
  