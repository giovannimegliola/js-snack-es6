"use strict";

// SNACK 1
//Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
//Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
//[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']  
//Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
//Generiamo e stampiamo in console la lista per i segnaposto.


const tableName = "Tavolo Vip";
const listaInvitati = [
  'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
  'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
];

const listaSegnaposto = [];
let posto = 1;

listaInvitati.forEach(guest => {          //genera 4 posti nel caso dei maneskin
  if (guest === 'Maneskin') {
    for (let i = 0; i < 4; i++) {
      listaSegnaposto.push({
        tableName,
        guestName: guest,
        place: posto
      });
      posto++;
    }
  } else {                               //1 posto per gli altri invitati
    listaSegnaposto.push({
      tableName,
      guestName: guest,
      place: posto
    });
    posto++;
  }
});

// Stampa la lista dei segnaposto
listaSegnaposto.forEach(segnaposto => {
  console.log(`Tavolo: ${segnaposto.tableName}, Ospite: ${segnaposto.guestName}, Posto: ${segnaposto.place}`);
});

