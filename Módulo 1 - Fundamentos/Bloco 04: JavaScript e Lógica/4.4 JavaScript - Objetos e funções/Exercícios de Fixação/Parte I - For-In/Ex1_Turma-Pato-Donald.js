// * Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// TODO 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome:

console.log("Bem-vinda, " + info.personagem + "\n");

// TODO 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, 
// TODO     imprima o objeto no console:

info['recorrente'] = 'Sim';

for (let key in info) {

  console.log(key, info[key]);

}

// TODO 3 - Faça um for/in que mostre todas as chaves do objeto:

for (let key in info) {
  
  console.log("\n" + key);

}

// TODO 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto:

for (let key in info) {
  
  console.log("\n" + info[key]);

}

// TODO 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e 
// TODO     os seguintes valores: 
// TODO      - 'Tio Patinhas', 
// TODO      - 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 
// TODO      - 'O último MacPatinhas', 
// TODO      - 'Sim'. 
// TODO     Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves:

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {

  if (info[key] === "Sim" && info2[key] === "Sim") {

    console.log("\nAmbos recorrentes");

  } else {

    console.log("\n" + info[key] + " e " + info2[key]);

  }

}