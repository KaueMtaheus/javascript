function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){ //se a caixa de numero estiver vazinho mostra window.alert
        window.alert('POR FAVOR DIGITE UM NUMERO..') 
    }else{
        let n = Number(num.value) //se nao mstra o numero 
        let c = 1
        tab.innerHTML = '' //limpa para aparecer outra tabuada e nao fica uma em cima da outra
        while (c <= 10){ //contador ate 10
            let item = document.createElement('option') //ele cria option dentro do select em html
            item.text = ` ${n} x ${c} = ${n*c} ` //n vezes o meu contador e igual =  
            tab.appendChild(item) //adicionar um elemento filho 
            tab.value = `tab${c}`
            c++
        }
    
    }
}