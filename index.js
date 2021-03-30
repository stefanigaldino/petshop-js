const moment = require('moment');
const nomePetshop = "HUNTER PETSHOP";

let pets = [{
    nome: "Hunter",
    idade: 1,
    tipo: "Cão",
    raca: "Sharpei",
    peso: 20,
    tutor: "Fani",
    vacinado: false,
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
    vacinado: false,
    contato: "(99)99999-9999",
    servico: ['consulta'] 
}
];

const listarPets = () => { // arrow function 
//     //for(let i = 0; i < pets.length; i++){
//         //console.log(pets[i].nome);
         for (let pet of pets){
             console.log(`${pet.nome}, ${pet.idade}, ${pet.raca}`); //template string
     }
}

// const listarPets = () => {

//     for(let pet of pets){
//         console.log(`Nome do Pet: ${pet.nome}
//         Idade: ${pet.idade}
//         Tipo: ${pet.tipo}
//         Raca: ${pet.raca}`)
//     }
// }

const exibirPets = () => {

    for(let pet of pets){
        console.log(`O Nome do Pet: ${pet.nome},
        Idade: ${pet.idade},
        Tipo: ${pet.tipo},
        Raca: ${pet.raca}.
        ---------`)
    }
}


const vacinarPet = (pet) => {
    if (pet.vacinado = true) {
        console.log(`O pet ${pet.nome} encontra-se vacinado!`) 
    } 
        else { 
            console.log(`Atenção, ${pet.nome} já foi vacinado!`)        
    }
}

const campanhaVacinacao = () => {
    console.log("Campanha Vacina 2021");
    console.log("Vacinado...");
    
    let petVacinados = 0
    for (let pet of pets){
        if (!pets.petVacinados) {
            vacinarPet(pets);
            petVacinados ++;
        }
    }
    console.log(`${petVacinados.nome} pets foram vacinados nessa campanha!`);
}

const adocionarNovoPet = (nome, tipo, idade, raca, peso, tutor, vacinado) => {
    let pet =  {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        vacinado: vacinado,
        servicos: []
    }
    pets.push(pet)
};

adocionarNovoPet("Califa", "cão", 10, "labrador", 28, "Gueu", false)
//campanhaVacinacao();
//exibirPets();
//vacinarPet(pets[0]);
listarPets();
// console.log(pets);