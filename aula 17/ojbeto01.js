let amigo = {nome: 'josé', 
sexo:'M', 
peso:85.4, 
engordar(p =0){ //função 
    console.log ('Engordou')
    this.peso += p
}
}
amigo.engordar(2)//é uma função dentro de uma variavel 
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)