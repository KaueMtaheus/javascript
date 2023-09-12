function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    //var horas = 18
    msg.innerHTML = `agora sao ${horas} horas.`
    if (horas >= 0 && horas < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffd4a7'
    }else if (horas >= 12 && horas < 18){
        //Boa tarde!
        img.src = 'fototarde-3.png'
        document.body.style.background = '#427473'
    }else{
        //Boa noite!
        img.src = 'fotonoite-2.png'
        document.body.style.background = '#070616'
    }



}

