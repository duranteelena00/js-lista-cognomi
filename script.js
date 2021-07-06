/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili. */

//Initial variables
var listItemsContainer = document.getElementById("lastnames-list");
var listItemPosition = document.getElementById("user-lastname-position");
lastNamesList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

//Ask user his last name
do {
  userInput = prompt("Inserisci il tuo cognome").trim().toLowerCase();
} while (!userInput);

userLastName = userInput[0].toUpperCase() + userInput.substring(1);

//Push user's last name in the initial array
lastNamesList.push(userLastName);
lastNamesList.sort();

//Print the sorted list
console.log("Last names: " + lastNamesList.join(" - "));
console.log(
  userLastName + " è in posizione " + (lastNamesList.indexOf(userLastName) + 1)
);

listItem = "";
for (var i = 0; i < lastNamesList.length; i++) {
  listItem += "<li>" + lastNamesList[i] + "</li>";
}

listItemsContainer.innerHTML = listItem;

//Specify user's last name position in the array
listItemPosition.innerText =
  "La posizione del cognome che hai inserito (" +
  userLastName +
  ") è la numero " +
  (lastNamesList.indexOf(userLastName) + 1);
