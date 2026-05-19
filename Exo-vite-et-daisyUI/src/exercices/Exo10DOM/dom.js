// const allParagraphe = document.getElementsByTagName('p');
// console.log(allParagraphe);
// function modifierParagraphe(element) {
//     for (let i=0; i < element.length; i++) {
//         element[i].innerText = "LOL JE SUIS HACKERMAN";
//     }
// }

// modifierParagraphe(allParagraphe)

// Version prof
// console.log('---------------ExerciceDOM Selectors---------------');
// // TODO : Dans une page avec plein de paragraphes.
// // TODO : Se débrouiller pour selectionner tous les paragraphes dans une HTMLCollection.
// // TODO : Avec Array.from(), convertir la HTMLCollection en tableau.
// // TODO : Sur le tableau on va utiliser la méthode .map() pour parcourir chaque paragraphe et modifier leur contenu via innerText ainsi que leur style.backgroundColor.

const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

// On va transformer la HTMLCollection en tableau
let tabCollection = Array.from(allParagraphs);
console.log(tabCollection);

tabCollection.map(element => {
    console.log(element);
    element.innerText = 'Hello la fullstackSquad';
    element.style.backgroundColor = 'chartreuse';
});

const laDiv = document.querySelector('.vide');
console.log(laDiv);

laDiv.appendChild(allParagraphs[0]);

const nouveauText = document.createTextNode('azertyuiop');
laDiv.append(nouveauText);