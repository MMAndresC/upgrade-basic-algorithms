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

//Iteracion#5

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if ((number2/number1)==2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1!==number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3!=number1) {
  console.log("number3 es distinto number1");
}

if ((number3*5)==number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3*5)==number1 && (number1*2)==number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2/2)==number1 || (number1/5)==number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteracion#6 

//1.1

for (let i=0; i<=9; i++){
    console.log(i);
}

//1.2

for (let i=0; i<=9; i++){
    if ((i%2)==0){
        console.log(i);
    }
}

//1.3

for (let i=0; i<=10; i++){
    if (i!=10){
        console.log(i,'Intentando dormir');
    }else {
        console.log(i,'Dormido!');
    }
}

