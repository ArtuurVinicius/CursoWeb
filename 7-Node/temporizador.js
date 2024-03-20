const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 4', function() {
    console.log('Executando tarefa 1', new Date().getSeconds())
}) 
//executa de 5 em 5s, em qualquer minuto, 12 horas, em qualquer dia do mes, em qualquer mes
// e nas terças-feiras

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1...')
}, 20000)

// setImmediate é como o setTimeOut com 0ms
// setInterval dispara uma função periodicamente

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2', new Date().getSeconds())
})