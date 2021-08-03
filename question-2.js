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