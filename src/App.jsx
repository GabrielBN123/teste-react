import './App.css'
import React from 'react'

import Primeiro from './components/basics/primeiro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalIf from './components/basics/CondicionalIf'

export default (props) =>
    <div className="app">
        <Card title="Com conteudo First">
            <Primeiro />
        </Card>

        <Card title="Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card title="Repeticao">
            <Repeticao></Repeticao>
        </Card>

        <Card title="Condicional">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card title="Condicional">
            <CondicionalIf numero={10}></CondicionalIf>
        </Card>
    </div>