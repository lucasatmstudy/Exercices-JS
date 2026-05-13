let noteTibo = [0,3,4,6,18,19,4];

// function calculerMoyenne(tableau) {
//     let sum = 0;
//     for (let i = 0; i < tableau.length; i++) {
//         sum = sum + tableau[i];
//     }
//     return sum / tableau.length;
// }

// console.log(noteTibo)
// console.log(calculerMoyenne(noteTibo))

function calculerMoyenneMention(tableau) {
    let sum = 0;
    for (let i = 0; i < tableau.length; i++) {
        sum += tableau[i];
    }
    moyenne = sum / tableau.length;

    if (moyenne >= 15)
        mention = "Très bien"
    else if (moyenne >= 10)
        mention = "Assez bien"
    else 
        mention = "Refus"
    return "La moyenne est :" + moyenne.toFixed(2) + mention
}

console.log(calculerMoyenneMention(noteTibo))
