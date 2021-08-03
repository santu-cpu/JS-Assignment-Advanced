// Question 10

// Please write correct English. This question is very confusing.

function Hero(name,level) {
	name = name;
	level = level;
} // incorrect

function Hero(name,level) {
	this.name = name;
	this.level = level;
} // correct. 'this' refers to the instance created by the constructor function.
