#Desafio
#Você recebeu desafio para determinar qual dos produtos é o preferêncial dos clientes de um posto de abastecimento
#de combustível. Para isso você deve escrever um algoritmo para ler o tipo de combustível 
#abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código 
#inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado 
#quando o código informado for o número 4.

#Entrada
#A entrada contém apenas valores inteiros e positivos.

#Saída
#Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, 
#conforme exemplo.

#Exemplo de Entrada|Exemplo de Saída#
#4				   #				#
#1  			   # MUITO OBRIGADO	#
#7 				   # Alcool: 1		#
#2 				   # Gasolina: 2	#
#2				   # Diesel: 0  	#				
#####################################

//continue a solução

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

while ( code != 4 ) {
  var code = parseInt(gets());
  
  switch (code) {
    case 1:
      alcohol += 1;
      break;
    case 2:
      gasoline += 1;
      break;
    case 3:
      diesel += 1;
      break;
    case 4:
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);