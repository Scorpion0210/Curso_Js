function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if(hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'img/manha-250.png'
        document.body.style.background = '#fae6c7'
        msg.innerHTML += `<p>Bom dia!</p>`
    }else if(hora >= 12 && hora <= 18){
        // Boa tarde!
        img.src = 'img/tarde-250.png'
        document.body.style.background = '#e08b22'
        msg.innerHTML += `<p>Boa tarde!</p>`
    }else{
        // Boa noite!
        img.src = 'img/noite-250.png'
        document.body.style.background = '#07141a'
        msg.innerHTML += `<p>Boa noite!</p>`
    }
}