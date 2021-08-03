// Question 1

var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00')
var uniMilliseconds = dateToday.getMilliseconds() // .getUTCMilliseconds() also works

// If the question means milliseconds since Unix epoch, then...

var UniMilliSec = dateToday.getTime()


// Question 2

var library = [
{
author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
},
{
author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];


function displayReadingStatus(library) {
	for ( var i = 0; i < library.length; i++) {
		if (library[i].readingStatus == true) {
			console.log(`Reading '${library[i].title}' by ${library[i].author}`);
		}
		else {
			console.log(`Not reading '${library[i].title}' by ${library[i].author}`);
		}
	}
			 
}

displayReadingStatus(library);


// Question 3

/* There are lots of mistakes in this question.Full of errors. Assuming the mistakes
 are typos....it would return 'Rohit'. */

// The question
 var Employee = {

 company: 'Rohit'

 }
 var Emp1 = Object.create(employee); // employee undefined
 delete Emp1.company 
 Console.log(emp1.company); // emp1 undefined ,c is capital in console 

// My answer
console.log(Emp1.company) // returns 'Rohit' as it is an inherited property,can only be deleted from prototype.


 // Question 4

 /* They won't return the same thing. foo1 returns { bar: "hello"},
 but foo2 returns 'undefined' because the keyword 'return' and the 
 return-statement are in different lines. The return-statement should begin 
 on the same line as the keyword.(Linebreak error) */


 // Question 5

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
	return num / 2;
});

print(new_arr); // new_arr = [1, 28, 39, 17, 32.5]


//Question 6

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
set.delete('Beethoven');


// Question 7
/* what is nested array object? array inside array? object inside array? array inside
object ? The question is not specific. */

var operatingSystem = [{ Name: 'Ubuntu' },{ version: 18.4 },{ license: 'open source'}]


// Question 8

var empDetail = Object.assign(name, details); // copy and merge
print(empDetail); // console.log(empDetail) for debugging

// Question 9

const gimli = {
name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() { 
    	return `Hi, my name is ${this.name}!`; 
    }
};

console.log(gimli.greet()); // print(gimli.greet()) to save or print the content of window


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









