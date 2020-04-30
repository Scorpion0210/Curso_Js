// posso colocar os parametros pré definidos ou opcionais
// pra caso a chamada vir um valor só
// isso evita e trata erro de falta de informação

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))