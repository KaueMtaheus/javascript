let num = [5,8,2,9,3]
//num[3] = 6                              // acrescenta o numero 6 na posição 3
num.push(1)                    //acrescenta o numero 1 na ultima posição , caso coloque a baixo do num.sort ira para ultima posicação 
num.sort()                    //coloca os numero em ordem 
console.log(num)             //mostra o numeros do vetor num na tela 
console.log(`o Vetor tem ${num.length} posicoes`)
console.log(`o primeiro valor e ${num[0]}`)
let pos = num.indexOf(8)        //valor a ser encontrado 
if (pos == -1){                 //se o valor  digitado a cima nao tiver no meu vetor, aprecer numero nao existe 
    console.log(`numero nao existe`)
}else{
    console.log(`o valor 8 esta na posição ${pos}`)     //senao aparecer o valor existente digitado a cima  
}



/*
for(let pos = 0; pos < num.length; pos ++){   
    console.log(`posicao ${pos} tem os valores ${num[pos]}`)
}
*/