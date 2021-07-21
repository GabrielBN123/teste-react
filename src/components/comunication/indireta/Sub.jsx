import React from 'react'

export default props => {

    function testeRandom(e) {
        props.click(Math.floor((Math.random() * 100 ) + 0), 'Finalizado!!')
    }

    return (
        <div>
            {/* <button onClick={props.click}>Alterar</button> */}
            {/* <br /> */}
            <button onClick={testeRandom}>Teste</button>
        </div>
    )
}