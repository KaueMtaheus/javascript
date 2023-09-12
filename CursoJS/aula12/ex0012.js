var agora = new Date()
var horas = agora.getHours()
var us= "Kaue"
console.log(`Agora são exatamente ${horas}hrs`)
if (horas < 12){
    console.log(`Bom dia!!, sr ${us}.`)
}else if(horas <= 18){
    console.log(`Boa tarde!!, ${us}.`)
}else{
    console.log(`Boa Noite!!, ${us}.`)   
}