const v1 = document.querySelector('#valor1')
const v2 = document.querySelector('#valor2')
const sinal = document.getElementsByClassName("sinal")
const resul = document.querySelector('#res')
const calc = document.querySelector('#calcular')

    calc.addEventListener('click', ()=> {
        var val1 = +v1.value 
        var val2 = +v2.value
        for(opc = 0; opc <= 4; opc++){
        if(sinal[0].checked == true){
            resul.value = val1 + val2
            console.log(sinal[0])
        }else if(sinal[1].checked == true){
            resul.value = val1 - val2
        }else if(sinal[2].checked == true){
            resul.value = val1 * val2
        }else if(sinal[3].checked == true){
            resul.value = val1 / val2
        }
    }
    })
    

