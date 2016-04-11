var input = prompt("Please enter a number to be modified.");

function timesThree(a) {
	return a * 3;
}

function cubed(b) {
	return b * b * b;
}

function halved(c) {
	return c/2;
}

var grandTotal = halved(cubed(timesThree(input)));

alert(input + " times three, cubed, and divided by two, equals " + grandTotal);