
function exercicio01(){
    let numeroDigitado;
    numeroDigitado = window.prompt("Digite o número para saber se é par ou ímpar: ")

    if((numeroDigitado % 2) == 0){
        console.log(`O número ${numeroDigitado} é par!!`)
    }else{
        console.log(`O número ${numeroDigitado} é ímpar!!`)
    }
}


function exercicio02(){
    let numero01;
    let numero02;

    numero01 = parseInt(window.prompt("Escreva o primeiro número: "));
    numero02 = parseInt(window.prompt("Escreva o segundo número: "));
    console.log(`O primeiro número é ${numero01}`);
    console.log(`O segundo número é ${numero02}`);

    if(numero01 > numero02) {
        console.log(`O número ${numero01} é maior que o número ${numero02}`)
    }else {
        console.log(`O número ${numero01} é menor que o número ${numero02}`)
    }

}


function exercicio03(){
    let idade;
    let deficiente;
    let gestante;

    idade = window.prompt("Insira sua idade: ")
    deficiente = window.prompt("Você é deficiente? (Responda com 'sim' ou 'nao')")
    deficiente = deficiente.toLowerCase();
    gestante = window.prompt("Você é gestante ? (Responda com 'sim' ou 'nao')")
    gestante = gestante.toLowerCase();

    console.log(`Sua idade é: ${idade}`)
    console.log(`Você é deficiente: ${deficiente}`)
    console.log(`Você é gestante: ${gestante}`)

    if((idade >= 65) || (deficiente == "sim") || (gestante == "sim")){
        console.log("Você atende as condições necessárias, vá para a fila PREFERÊNCIAL!!!")
    }else{
        console.log("Você não atende as condições necessárias, vá para a fila COMUM!!!")
    }


}

function exercicio04(){
    let idade;

    idade = parseInt(window.prompt("Esreva sua idade: "))
    console.log(`Sua idade é: ${idade}`)

    if(idade < 16){
        console.log("Você não está autorizado a participar do evento!!")
    }else if((idade >= 16) && (idade <= 18) ){
        console.log("Você pode participar do evento somento acompanhado de um RESPONSÁVEL!!")
    }else if(idade > 18){
        console.log("Você está autorizado a participar do evento!!")
    }

}


function exercicio05(){
    let login = "joao13";
    let senha = 1234;
    let loginDigitado;
    let senhaDigitada;

    loginDigitado = window.prompt("Escreva seu login: ")
    console.log(`Login: ${loginDigitado}`)
    senhaDigitada = parseInt(window.prompt("Digite sua senha:"))
    console.log(`Senha: ${senhaDigitada}`)

    if((loginDigitado == login) && (senhaDigitada == senha)){
        console.log("Acesso autorizado!!")
    }else if((loginDigitado == login) && (senhaDigitada != senha)){
        console.log("Acesso negado!! (SENHA INCORRETA)")
        exercicio05();
    }else if((loginDigitado != login) && (senhaDigitada == senha)){
        console.log("Acesso negado!! (LOGIN INCORRETO)")
        exercicio05();
    }else if((loginDigitado != login) && (senhaDigitada != senha)){
        console.log("Acesso negado!! (LOGIN E SENHA INCORRETAS)")
        exercicio05();
    }else {
        console.log("erro")
    }

}


function exercicio06(){
    let pergunta01;
    let pergunta02;
    let pergunta03;

    pergunta01 = window.prompt("Quantas libertadores o flamengo tem? \n Digite (1): O flamengo tem 40 libertadores \n Digite (2): o flamengo tem 3 libertadores \n Digite (3): O flamengo tem 5 libertadores \n Digite (4): Nenhuma das anteriores")
    console.log(`Sua resposta foi: ${pergunta01}`)
    

}

exercicio06();