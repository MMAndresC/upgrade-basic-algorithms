//Iteracion#1

//1.1
let myFavoriteHero = 'Hulk'; 

//1.2
let x = 50; 

//1.3
let h = 5;   
let y = 10;

//1.4
let z = h + y;  

//Iteracion#2

//1.1  ???????
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};   
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

//Iteracion#3

//1.1
alert(10*5);  

//1.2
alert(10/2);  

//1.3
alert(15%9);  
y = 10;
z = 5;

//1.4
x = 10+5;  
alert(x);

//1.5
x = 10*5;  
alert(x);


//Iteracion#4

//1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];  
console.log(avengers[0]);

//1.2
avengers[0] = 'IRONMAN';  
console.log(avengers[0]);

//1.3
alert(avengers.length);  //1.3

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];  
rickAndMortyCharacters.push('Morty','Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//1.5
//No puedo volver a declarar la misma array, añado el ultimo elemento a la que existe y sigo con el ejercicio
//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; 
rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//1.6
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);


