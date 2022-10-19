let Name = prompt ("Qual è il tuo nome?");
document.getElementById("name").innerHTML = Name;
let Surname = prompt("Qual è il tuo cognome?");
document.getElementById("surname").innerHTML = Surname;
let Color = prompt("Qual è il tuo colore preferito?");
document.getElementById("color").innerHTML = Color;
document.getElementById("allInfo").innerHTML = document.getElementById("name").innerHTML + document.getElementById("surname").innerHTML + document.getElementById("color").innerHTML + "22";
