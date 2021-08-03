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
