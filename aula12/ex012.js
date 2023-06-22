var agora = new Date () // new date pega a data do sistema operacional
var hora = agora.getHours () //get hours pega a hora do sistema operacional 
console.log(`Agora são exatamente ${hora} horas`)
if (hora<12){
    console.log ('Bom dia')
} else if (hora <= 18 ){
    console.log ('boa tarde!')
} else{
    console.log('boa noite!')
}