const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 5', function(){ // sequencia '*/5' de 5 em 5 sec, 13 igual a 13 horas, * qq minuto, * qq segundo, 5 dia 5 ou seja sexta feira
    console.log('Executando tarefa 1 ', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tafefa1')
}, 200000);

//setImmediate
//setInterval

// SEGUNDA MANEIRA  
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 13
regra.minute = 10
regra.second = 00

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('executando tarefa 2', new Date().getMilliseconds())
})

