import React, {useState} from 'react'

export default props => {

    const [nome, setNome] = useState('---')

    // function setNome(Nome) {
    //     setNome(Nome)
    // }

    return (
        <div>
            <h4>Nome: {nome}</h4>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            
        </div>
    )
}