var agora = new Date()
var hora = agora.getHours()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log(`Domingo e são ${hora}`)
        break;
    case 1:
        console.log(`Segunda e são ${hora}`)
        break;
    case 2:
        console.log(`Terça e são ${hora}`)
        break;
    case 3:
        console.log(`Quarta e são ${hora}`)
        break;
    case 4:
        console.log(`Quinta e são ${hora}`)
        break;
    case 5:
        console.log(`Sexta e são ${hora}`)
        break;
    case 6:
        console.log(`Sábado e são ${hora}`)
        break;
    default:
        console.log('[ERRO] Dia inválido!]')
        break;
}