function exercicio01(){
    alert("lista de compras");
    let lista = [];
    let opcao;
    

    while (opcao !=3) {
    
        opcao = parseInt(prompt("- Menu - \n1 - Incluir item - \n2 - Ver na lista - \n3 - Sair "));
            switch (opcao) {              
            case 1 : 
                let item = prompt("Que item deseja inserir?");
                lista.push(item);
                alert("Item incluído");
                break;
            case 2 :
                //for(let i=0; i<lista.length; i++) {    
                    //alert(lista[i]);
                //}
                lista.forEach(item => alert (item) );
                break;
            case 3 :
                    alert("Saindo");
                break;
                
            default : 
                alert("Insira uma opção válida");
         }
    }
}
exercicio01();
