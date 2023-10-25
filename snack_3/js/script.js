"use strict";

//SNACK 3: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore utilizzando destructuring e template literal.

const racingBike = [
  {
    bikeName: 'Aurum Magma',
    bikeWeight: 7,
  },
  {
    bikeName: 'Berria Belador',
    bikeWeight: 10,
  },
  {
    bikeName: 'Coluer Radar',
    bikeWeight: 9,
  },
  {
    bikeName: 'Protek S3',
    bikeWeight: 6,
  },
  {
    bikeName: 'Rodman Sabik',
    bikeWeight: 11,
  },
]        
console.log(racingBike);


let minWeight = racingBike[0];            //cerco la bici col peso minore

for(let i = 0; i < racingBike.length; i++){
  if(racingBike[i].bikeWeight < minWeight.bikeWeight){
    minWeight = racingBike[i];
  }
}
console.log(minWeight)


//destructuring

let {bikeName, bikeWeight} = minWeight;

//template literal

console.log(`La ${bikeName} è quella che ha il peso minore, che corrisponde a ${bikeWeight} kg`)