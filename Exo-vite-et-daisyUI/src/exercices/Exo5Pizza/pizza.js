let prenom = "Marie";
let age = 30;
let ville = "Paris";
let date = new Date().toLocaleDateString('fr-FR');
let blague = 'Qu\'est-ce qu\'une pizza a dit à une autre pizza qui lui demandait des conseils? \"Suis ta pâte et tout ira bien!\"'
let pizza = '"Rafinata"'

let commande = {
    article: 2,
    pizza: "calzone",
    prix: 12.5 + 12.5,
    adresse: "11 avenue de l'europe",
    temps: "30",
};

let SumUpOrderPhrase = `Bonjour ${prenom}, merci pour votre commande : ${commande.pizza} est en cours de préparation.
Elle vous sera livrée d'ici ${commande.temps} minutes à votre adresse ${commande.adresse}.
Prix total :${commande.prix} euros.
Merci d'avoir commandé chez la pizzerria "Rafinata".
${blague}`;

console.log(date)
console.log(SumUpOrderPhrase)