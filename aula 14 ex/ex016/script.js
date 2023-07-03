function  contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res= document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length ==0){
        res.innerHTML = "impossivel contar!!!"
        //window.alert('[erro] Falta dados!')
        
    } else {
       res.innerHTML = "Contando: <br> "
       let i = Number(ini.value)// convertendo o valor que esta dentro de i em valor númerico
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p<=0){
        window.alert("Passo invalido! Considerando Passo1 ")
        p = 1 
       }
        if (i < f){//contagem crescente
          for (let c = i; c<= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}` // esse codigo so funciona entre crases
       }      
    } else {
        for (let c =i;c>=f;c -=p ){//contagem regressiva
            res.innerHTML += `${c} \u{1F449}`
        }
      }
      res.innerHTML += `\u{1F3C1}`
    }
}