let valores = [3,5,7,8,9,]
valores.sort()                                                          //coloca os valores em ordem
//console.log(valores[0])
/*
for(let pos = 0; pos < valores.length; pos++){                                            //pos recebe 0; enquanto pos for menor doq valores.length; pos vai somando 1
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)   
}               
*/

   

for (let pos in valores ){                                                            //maneira mais simplificada 
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`) 
}


