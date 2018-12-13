function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!!')    
    } catch (error) {
        tratarErroLancar(error)
    }finally{
        //cai aqui independente do try o catch
        console.log('final')
    }
    
}

function tratarErroLancar(e){
    //throw new Error('Erro tratado aqui..')
    //throw 10;
    //throw 'Mensage qualquer';
    //throw false;
    throw {nome: e.name,
          msg: e.message,
          date: new Date}
}

const obj = {name: 'fabio'};


imprimirNomeGritado(obj)