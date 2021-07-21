import React, {useState} from 'react'

export default (props) => {

    return(
        <div>
            <button className="buttonMega" style={{borderColor: props.bcolor || '#A7DBDB'}} onClick={props.clickRandom}>Gerar Numero Aleatório</button>
        </div>
    )
}