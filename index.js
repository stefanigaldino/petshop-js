const moment = require('moment');
const nomePetshop = "HUNTER PETSHOP";
const bancoDados = require("./bancoDados.json");


let pets = bancoDados.pets;
    

const listarPets = () => { // arrow function 
//     //for(let i = 0; i < pets.length; i++){
//         //console.log(pets[i].nome);
         for (let pet of pets){
             console.log(`${pet.nome}, ${pet.idade}, ${pet.raca}, ${pet.servico}`); //template string
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

const darBanhoPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servico.push(`${'Serviço'}, ${"Banho "}, ${dataHoje}`);

}

const tosarPet = (pet) =>{
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servico.push(`${'Serviço'}, ${"Tosa "}, ${dataHoje}`);
}

const apararUnhasPet = (pets) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pets.servico.push(`${'Serviço:'}, ${'Aparou unhas'}, ${dataHoje}`);
}

//console.log(JSON.stringify(pets));
//adocionarNovoPet("Califa", "cão", 10, "labrador", 28, "Gueu", false)
//apararUnhasPet(pets[1]);
//darBanhoPet(pets[2]);
//campanhaVacinacao();
//exibirPets();
//vacinarPet(pets[0]);
//listarPets();
console.log(pets);
