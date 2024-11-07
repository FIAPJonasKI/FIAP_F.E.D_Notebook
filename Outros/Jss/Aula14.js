// let, const, var - são tipos de variaveis

let nome = "Jonas"; //variavel que armazena uma string (palavra123)
let idade = 23; // variavel armazena numero (0,1,2,3,4,5...)
let isAlino = true; // tipo boolean (true/false)
let altura = 1.75; // numerico com casas decimais (0.1, 0.2, 0.3 ...)
const pessoa = {nome:"Ana", idade: 22}; // objeto
let aluno = {nome:"Luiz", idade:25}; //objeto
console.log("Nome:", nome);
console.log(typeof nome);
console.log("let aluno:", typeof aluno);
console.log("const pessoa:", typeof pessoa);
let contador = 0;
function incrementarContador(){
    contador ++;
    document.getElementById("contador").textContent = contador;
}
function mudarCor(){
    document.body.style.backgroundColor="#333";
}
function mostrarHora(){
    const agora = new Date()
    const horas = agora.getHours().toString().padStart(2,'0');
    document.getElementById("hora").textContent = horas; 
}
let contagem = 10;

intervalo = setInterval(
    function(){
    document.getElementById("contadorRegressivo").textContent = contagem;
    contagem--;
    if (contagem < 0){
        document.getElementById("contadorRegressivo").textContent = "Tempo esgotado";
    }
}, 1000)