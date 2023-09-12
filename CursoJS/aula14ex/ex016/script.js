function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pass= document.getElementById('txtpas')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO!!] faltam dados...')
    }else{
        res.innerHTML = '<strong>CONTANDO...</strong>'
        let i = Number(ini.value) 
        let f = Number(fim.value)
        let p = Number(pass.value) 
        if (p <= 0) {
            window.alert('Passo invalido [CONSIDERANDO PASSO 1]')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for (let c = i ; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449} ` 
            }

        }else{
            //contagem regresiva
            for (let c = i ; c >= f; c -= p )
            res.innerHTML += ` <strong>${c}</strong> \u{1F449} `      
         }
    
            res.innerHTML += ` \u{1F3C1}`
        
    }


}