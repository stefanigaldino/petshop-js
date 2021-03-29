const nomePetshop = "HUNTER PETSHOP"

let pets = [{
    nome: "Hunter",
    idade: 1,
    tipo: "Cão",
    raca: "Sharpei",
    peso: 20,
    tutor: "Fani",
    vacinado: true,
    contato: "(99)99999-9999",
    servico: ['banho', 'consulta']
},
{
    nome: "Nalu",
    idade: 14,
    tipo: "Cão",
    raca: "Husky-siberiano",
    peso: 28,
    tutor: "Neck",
    vacinado: true,
    contato: "(99)99999-9999",
    servico: ['banho', 'tosa']
},
{
    nome: "Geraldhy",
    idade: 2,
    tipo: "gato",
    raca: "Oriental",
    peso: 3,
    tutor: "Zé",
    vacinado: true,
    contato: "(99)99999-9999",
    servico: ['consulta'] 
}
];

// arrow function 
const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}

listarPets();
// console.log(pets);