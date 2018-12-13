// pessoa -> endereçõ de memoria exe: 123 -> que aponta para o objeto{....}
const pessoa = {nome: 'fabio'}
pessoa.nome = 'Joao'
console.log(pessoa)


// pessoa -> endereçõ de memoria exe: 456 -> que aponta para o objeto{....}
// Dessa forma abaixo nao pode ser feito pois a atribuição estaria mudando o endereço de memoria
// do objeto pessoa
//pessoa = {nome: 'ana'}

//Congela objeto, ou seja, torna as propriedades constantes...
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'av. brasil'
delete pessoa.name

console.log(pessoa.nome)
console.log(pessoa)



//Para criar o objeto como constante
const pessoaConstante = Object.freeze({nome:'jose'})
pessoaConstante.nome = 'rafael'
console.log(pessoaConstante)





