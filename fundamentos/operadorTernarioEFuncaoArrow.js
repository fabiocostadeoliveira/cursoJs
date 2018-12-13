const resultado = nota => nota > 5 ? 'Aprovado' : 'Reprovado';
console.log(resultado(7))

//outra maneira da funcion 
const resultado2 = nota => {
    return nota > 5 ? 'Aprovado' : 'Reprovado';
}
console.log(resultado2(8))