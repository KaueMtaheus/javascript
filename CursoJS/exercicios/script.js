let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (isnumero(num.value) && !inlista(num.value, valores)){    //se ismumero é o numero e se ele nao(!) esta em inlista 
        valores.push(Number(num.value))        //adiciona o numero na lista
        let item = document.createElement('option')   //faz mostrar em lista o valor aicionado 
        item.text = `Valor ${num.value} adicionado`     //escreve o valor adicionado 
        lista.appendChild(item)     //adicona em lista      
        res.innerHTML = ''     //limpa meu numeros anteriores adiconados para mostra novos. 
    }else{
        window.alert('valor invalido ou ja encotrado na lista ')
    }
   
    num.value = ''           // apaga a barra de pesquisa do numero para nao precisar
    num.focus()              //ficar cliando.  focus()para limpar   

}


function finalizar(){
    if (valores.length == 0){
        window.alert('adicione antes de finalizar ')
    }else {
        let tot = (valores.length)         //variavel criada para meu total de valores
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){      //for para cada posição em valorez
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p>o maior valor digitado foi ${maior}.<p>`
        res.innerHTML += `<p>o menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>a media de valore é ${media}</p>`
    }





}