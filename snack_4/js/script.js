"use strict";

// PROBLEMA: Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//array con oggetti le (attuali al 25/10) prime 10 squadre della serie A 

const serieA = [
  {
    nome: 'Inter',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Juventus',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Napoli',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Fiorentina',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Atalanta',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Roma',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Bologna',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Lazio',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Lecce',
    puntiFatti: 0,
    falliSubiti: 0
  },
  
]        
console.log(serieA);


//numeri casuali per punti fatti e falli subiti

serieA.forEach((team) => {
  team.puntiFatti = Math.floor(Math.random() * 114) + 1;
  team.falliSubiti = Math.floor(Math.random() * 200) + 1;
});


//nuovo array usando destructuring con nomi e falli subiti

const serieA1 = serieA.map((team) => {
  const {nome, falliSubiti} = team; 

  let stats = {
    nome,
    falliSubiti
  }
  return stats;
});

console.log(serieA1)

