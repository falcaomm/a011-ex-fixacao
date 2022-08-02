const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

console.log('Primeiro ator:', filme.elenco[0]); 
console.log('Último ator:', filme.elenco[3]); 
console.log('Transmissões de hoje:', filme.transmissoesHoje);
console.log('Horário de transmissão no Canal Brasil:', filme.transmissoesHoje[1].horario); 