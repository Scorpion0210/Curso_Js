function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/m-crianca-250.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/m-jovem-250.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/m-adulto-250.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/m-idoso-250.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/f-crianca-250.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/f-jovem-250.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/f-adulto-250.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/f-idoso-250.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.color = 'rgba(70, 142, 241, 0.7)'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}