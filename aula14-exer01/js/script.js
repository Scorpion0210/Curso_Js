function calcular(){
    //alert("AAAAA")
    let txti = window.document.getElementById('txtini')
    let txtf = window.document.getElementById('txtfin')
    let txtp = window.document.getElementById('txtint')
    let res = window.document.querySelector('div#msg')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0 ) { 
        res.innerHTML = 'Impossivel contar!'     
    }else{
        res.innerHTML = 'Contando: <br>'
        let a = Number(txti.value)
        let b = Number(txtf.value)
        let c = Number(txtp.value)

        if (c<=0) {
            alert ('Compo INTERVALO vazio! Considerando Intervalo 1.')
            c = 1
            
        }

        if (a < b) {
            //Contagem crescente
            for(let contador = a; contador <= b; contador += c){
        
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }else{         
            //Contagem decrescente  
            for(let contador = a; contador >= b; contador -= c){
        
                res.innerHTML += ` \u{1F449} ${contador}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    
    }

    
}