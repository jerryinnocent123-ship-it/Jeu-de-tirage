// mettrise de fonctions

function helloworld(){
    console.log("hello world");
}

console.log(helloworld());

// calculer la somme de deux nombres
function somme (a,b){
    return a + b;
}
console.log(somme(5,10));

// multiplication 
function multi(x,y){
    return x * y;
}

console.log(multi(12,4));

// demande age
// function demandeage(){
//     let age = prompt("quel est ton age ?");
   
// //      if(age >= 18){
// //         console.log("Vous avez " + age + " ans");
// //         return "majeur";
// //     } else {
// //         console.log("Vous avez " + age + " ans");
// //         return "mineur";
// //     }
    

// //     return age;
// // }
// // console.log(demandeage());

// // creer une fonction qui peut donner un chiffres entre 0 et 10 par hasard
function randomNumber(){
    return Math.floor(Math.random() * 10);
}
// // console.log(randomNumber());
// // declarons 3 varables 
// let slot1 = randomNumber();
// let slot2 = randomNumber();
// let slot3 = randomNumber();

// for (let i = 0; i <9; i++){
//     slot1 = randomNumber();
//     slot2 = randomNumber();
//     slot3 = randomNumber();
//     console.log( slot1 + " | " + slot2 + " | " + slot3);
// }
// if (slot1 === slot2 && slot2 === slot3){
//     console.log("Gagné !");
// }
// if ( slot1===7 && slot2===7 && slot3===7){
//     console.log("Jackpot !!!");
// }
//  else {
//     console.log("Perdu !");
// }


// integration avec le html

//recuperation des donnes
let btnlancer = document.getElementById("lancer");
let r1= document.querySelector( "#tirage .jeu1");
let r2= document.querySelector( "#tirage .jeu2");
let r3= document.querySelector( "#tirage .jeu3");
let resultat = document.querySelector(".resultat h4");
let fond = document.querySelector(".fond");

// quand on clique sur le bouton
btnlancer.addEventListener("click", function(){
 // chak varible prend une valeur aleatoire
    r1 = randomNumber();
    r2 = randomNumber();
    r3 = randomNumber();
       console.log(r1 + "|" + r2 + "|" + r3);
       
// afficher les resultats dans le html
    r1= document.querySelector( "#tirage .jeu1").innerText = r1;
    r2= document.querySelector( "#tirage .jeu2").innerText = r2;
    r3= document.querySelector( "#tirage .jeu3").innerText = r3;

// verifier les resultats
    if( r1 === r2 && r2 === r3){
       resultat = document.querySelector(".resultat h4").innerText = "Gagné !";
       fond.style.backgroundColor = "red";
       
    }
    if ( r1===7 && r2===7 && r3===7){
       resultat = document.querySelector(".resultat h4").innerText = "Jackpot !!!";
    }
    else{
       resultat = document.querySelector(".resultat h4").innerText = "Perdu !";
       
    }
});