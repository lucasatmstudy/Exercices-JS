let noteTibo = [0,3,4,6,18,19,4];

function calculerMoyenne(tableau) {
    let sum = 0;
    for (i = 0; i < tableau.length; i++) {
        sum = sum + tableau[i]
    }
    return sum / tableau.length
}

console.log(noteTibo)
console.log(calculerMoyenne(noteTibo))