function falarDepois(segundos, frase){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (segundos > 5)
                reject('Nao pode ser informado mais que 5 segundos!!!')
            resolve(frase)
        }, segundos + 1000);
    })
}

falarDepois(6,'opa blz')
    .then(frase => frase.concat('!!!!!!!'))
    .then(outrafrase => console.log(outrafrase))  // tratamento do ok 
    .catch(erro => console.log(erro))  // tratamento do erro