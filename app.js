
var knigi = ['Осень', 'Три жизни', 'Подсознание может все', 'Алгебра', 'Русский язык', 'Урбанистика']

function books (arg){
    var knigiSbukvoiU = []
    var ostalnye = []
    for (i of arg){
        if(i.toLocaleLowerCase().includes('у')){
            knigiSbukvoiU.push(i)
        }else {ostalnye.push(i)}
    }

    console.log("Knigi s bukvoi U", knigiSbukvoiU)
    console.log('Ostalnye knigi', ostalnye)
}

books(knigi)