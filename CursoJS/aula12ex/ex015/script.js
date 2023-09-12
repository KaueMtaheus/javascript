function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('erro.. verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radisex')     
        var idade = ano - Number(fano.value)
        var genero = ''
        var genero1 = ''
        var genero2 = ''
        var genero3 = ''
        var genero4 = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            genero1 = 'crianca'
            genero2 = 'jovem'
            genero3 = 'adulto'
            genero4 = 'idoso'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebe-h.png')
                res.innerHTML = `detectamos <strong>${genero1}</strong> com <strong>${idade}<strong> anos. `
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-h.png')
                res.innerHTML = `detectamos <strong>${genero2}</strong> com <strong>${idade}</strong> anos. `
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'adulto-h.png')
                res.innerHTML = `detectamos <strong>${genero3}</strong> com <strong>${idade}</strong> anos. `
            }else{
                //idoso                
                img.setAttribute('src', 'idoso-h.png')
                res.innerHTML = `detectamos <strong>${genero4}</strong> com <strong>${idade}</strong> anos. `
            }         
        }else if (fsex[1].checked) {
            //genero = 'mulher'
            genero = 'mulher'
            genero1 = 'crianca'
            genero2 = 'jovem'
            genero3 = 'adulto'
            genero4 = 'idoso'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebe-m.png')
                res.innerHTML = `detectamos <strong>${genero1}</strong> com <strong>${idade}</strong> anos. `
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
                res.innerHTML = `detectamos <strong>${genero2}</strong> com <strong>${idade}</strong> anos. `
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
                res.innerHTML = `detectamos <strong>${genero3}</strong> com <strong>${idade}</strong> anos. `
            }else{
                //idoso                
               img.setAttribute('src', 'idoso-m.png')
               res.innerHTML = `detectamos <strong>${genero4}</strong> com <strong>${idade}</strong> anos. `   
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    } 

    
}