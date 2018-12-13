const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtroChineses = funcionario => funcionario.pais == 'China'
const filtroMulheres = funcionario => funcionario.genero == 'F'
const salarioFunc  = funcionario => funcionario.salario
const filtroMenorSalario = (anterior,atual) => { return atual < anterior ? atual : anterior}
let arrayDados = []
axios.get(url).then(resposta =>{
    arrayDados = resposta.data
    console.log(arrayDados.filter(filtroChineses).filter(filtroMulheres).map(salarioFunc).reduce(filtroMenorSalario))
    console.log('testando o nodemon')
})


