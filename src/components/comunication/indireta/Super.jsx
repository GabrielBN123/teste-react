import React, { useState } from 'react'
import Sub from './Sub'

export default props => {

    const [num, setNum] = useState(0)
    const [par, setPar] = useState(0)

    function clickFunction(valorGerado, finalizado){
        // console.log(finalizado + ' N° ' + valorGerado)
        setNum(valorGerado)
        if (valorGerado % 2 == 0) {
            setPar('Par')
        }else if (valorGerado % 2 == 1){
            setPar('Impar')
        }else{
            setPar('Nenhuma Opção')
        }

    }

    return (
        <div>
            <h4>Valor: {num} o numero é: {par}</h4>
            
            <br />
            <Sub click={clickFunction}></Sub>
        </div>
    )
}