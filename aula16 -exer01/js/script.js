let num = document.getElementById('txtn')
let incluin = document.getElementById('selnum')
let msg = document.getElementById('res')
let lista = []
function adicionar(){
    let n = Number(num.value)
    let procurado = lista.indexOf(n)
    
    if (n == 0 || n > 100 || procurado != -1 || n == '') {
        alert("Valor inválido ou já encontrado na lista.")
    }else{
        msg.innerHTML = ''
        lista.push(n)
        // A função abaixo compara o valor maior e ordena o Array
        lista.sort(function(a, b) 
            {
                return a - b;
            }
        )

        let item = document.createElement('option')
        let c = 1
        item.text = `Valor ${n} foi adicionado.`
        item.value = `incluin${c}`
        incluin.appendChild(item)
        c++
    }
    
    num.value = ''
    num.focus()
}

function final(){
    
    if (lista.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        // A função abaixo compara o valor maior e ordena o Array
        lista.sort(function(a, b) 
            {
                return a - b;
            }
        )

        let total = 0
        for (let pos in lista) {
            total += lista[pos] 
        }
        let media = total/lista.length
        
        let m = lista.length - 1

        msg.innerHTML = `<p>Ao todo, temos <b>${lista.length}</b> números cadastrados.</p>`
        msg.innerHTML += `<p>O menor valor informado foi <b>${lista[0]}</b>.</p>`
        msg.innerHTML += `<p>O maior valor informado foi <b>${lista[m]}</b>.</p>`
        msg.innerHTML += `<p>Somando todos os valores, temos <b>${total}</b>.</p>`
        msg.innerHTML += `<p>A média dos valores digitados é <b>${media}</b>.</p>`
    
    }
    num.focus()
}