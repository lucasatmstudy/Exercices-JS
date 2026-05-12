let laAddition = 25.4+24.6
let laDivision = 100/20
let laMultiplication = 25*5
let laSoustraction = 1000-990
console.log(laMultiplication,laAddition,laDivision,laSoustraction)
console.log((laMultiplication-(laAddition+laDivision))/laSoustraction)
const leTotal = (laMultiplication-(laAddition+laDivision))/laSoustraction
console.log(leTotal)

let unCompteur = 1
unCompteur ++
unCompteur --
unCompteur = unCompteur*10
unCompteur = unCompteur/2
console.log(unCompteur)

function leCompteur(nombreBase) {
    return nombreBase+unCompteur
}

console.log(leCompteur(leTotal))

console.log("Puissance du leTotal", leTotal,"par 3", "est égale à", (leTotal**3))

console.log("Suite de l'exercice,2^10")
let chiffreBase = 2
let laPuissance = 10

console.log(chiffreBase**laPuissance)