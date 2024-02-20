function retornaValorDupblicado(valor){
    return valor * 2
}

// console.log(retornaValorDupblicado(4));
// console.log(retornaValorDupblicado(6));

// function criarObjeto(){
//     var objeto = {}
//     return {}
// }

// console.log(criarObjeto());
// let pessoaA = criarObjeto();
// let pessoaB = criarObjeto();
// console.log(pessoaA, pessoaB);
//pessoaA = "Daniel Nascimento";
//pessoaB = "Elena Nascimento";
//console.log(pessoaA, 'e', pessoaB);

// pessoaA.nome = "Daniel";
// pessoaB.nome = "Elena";
// console.log(pessoaA);
// console.log(pessoaB);


function fabricarPessoa(nome, meio, sobrenome) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.meio = meio
    pessoa.sobrenome = sobrenome;

    return pessoa;
}
// let pessoaA = fabricarPessoa('Daniel', 'Péricles', 'Nascimento');
// let pessoaB = fabricarPessoa('Arthur', 'Vinicius', 'Nascimento');
// console.log(pessoaA);
// console.log(pessoaB);

function fabricarPessoa(nome, meio, sobrenome) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.meio = meio;
    pessoa.sobrenome = sobrenome;
        
        function nomeCompleto(){
            return `${pessoa.nome} ${pessoa.meio} ${pessoa.sobrenome}`
        }

        pessoa.nomeCompleto = nomeCompleto;
    return pessoa
}


let pessoaA = fabricarPessoa('Elena', 'Silva', 'Nascimento');
let pessoaB = fabricarPessoa('Artur', 'Vinicius', 'Nascimento');
console.log(pessoaA.nomeCompleto());
console.log(pessoaB.nomeCompleto());