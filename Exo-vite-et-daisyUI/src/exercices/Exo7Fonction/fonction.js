unNombre()
deuxNombre(100)

function unNombre(nombreA=0) {
    console.log(nombreA+33);
}

function deuxNombre(nombreA=0, nombreB=0) {
    console.log(nombreA+nombreB);
}

// La variable wtf ne peut pas être appelée en dehors de la fonction buggyFunction. Il faut nommer cette variable séparément. 
// Si le but est d'afficher dans la console la valeur wtf, la fonction n'a pas d'utilité.
let wtf = 9
console.log(wtf);

// Si le but est d'utiliser un fonction pour afficher un variable.
let wtf = 9
function buggyFunction() {
    console.log(wtf);
}; 
buggyFunction(wtf);


