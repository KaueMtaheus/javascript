var idade = 18
if (idade < 16) {
    console.log(`Você tem ${idade} anos, ainda você nao pode votar`)
}else if (idade < 18 || idade >= 65) {
      console.log(`voce tem ${idade} anos , seu voto é opcional`)  
}else{
        console.log(`você tem ${idade} anos, seu voto é obrigatório`)
}
