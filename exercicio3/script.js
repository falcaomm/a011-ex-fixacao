//declaração pokemon1
const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

//declaração pokemon2 (cópia) + alterações
const pokemon2 = { ...pokemon1 }
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

//adicionando propriedade ataques no pokemon1
pokemon1.ataques = []
pokemon1.ataques.push(
    {
        nome: "Investida",
        dano: 40,
        tipo: "Normal",
        precisao: 100
    }
)

//copiando propiredade ataques para o pokemon2
pokemon2.ataques = [...pokemon1.ataques]

//adicionando ataque no pokemon1
pokemon1.ataques.push(
    {
        nome: "Folha Navalha",
        dano: 45,
        tipo: "Grama",
        precisao: 100
    }
)

//adicionando ataque no pokemon2
pokemon2.ataques.push(
    {
        nome: "Jato de Água",
        dano: 40,
        tipo: "Água",
        precisao: 100
    }
)

//imprimindo 
console.log("Pokemon 1:", pokemon1);
console.log("\nPokemon 2:", pokemon2);