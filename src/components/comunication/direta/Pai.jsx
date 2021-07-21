import React from 'react'
import Filho from './Filho'

export default props => {
    return (
        <div>
            <Filho sobrenome={props.sobrenome || 'Sem Sobrenome'}>{props.nome || 'Não Possui nome'}</Filho>
        </div>
    )
}