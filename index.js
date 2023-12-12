//variáveis
let resultado = subt(100, 50)
let rank

//condição
if(resultado <= 10){
	rank = "Ferro"
    
}else if(resultado >= 11 && resultado <= 20){
	rank = "Bronze"
       
}else if(resultado >= 21 && resultado <= 50){
	rank = "Prata"
    
}else if(resultado >= 51 && resultado <= 80){
	rank = "Ouro"
    
}else if(resultado >= 81 && resultado <= 90){
	rank = "Diamante"
    
}else if(resultado >= 91 && resultado <= 100){
	rank = "Lendário"
       
}else if(resultado >= 101){
	rank = "Imortal"
}
    
//mensagem imprimida
console.log("O Herói tem saldo de " + resultado + " está no nível de " + rank)

//função
function subt(vitorias, derrotas){
	let subtracao = vitorias - derrotas
    return subtracao
}