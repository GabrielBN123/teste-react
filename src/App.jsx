import './App.css'
import React from 'react'

import Primeiro from './components/basics/primeiro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalIf from './components/basics/CondicionalIf'
import Pai from './components/comunication/direta/Pai'
import Super from './components/comunication/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'



export default (props) =>
    <div className="app">
        <h1 style={{ textAlign: 'center' }}> Fundamentos React </h1>
        <div className="cards">
            <Card title="Contador " bgColor="#69D2E7" txtColor="" txtAlign="center" bColor="#69D2E7">
                <Contador passo={10}></Contador>
            </Card>
            <Card title="Input" bgColor="#69D2E7" txtColor="" txtAlign="center" bColor="#69D2E7">
                <Input></Input>
            </Card>
            <Card title="Comunicação Indireta" bgColor="#000" txtColor="white" txtAlign="center" bColor="white">
                <Super></Super>
            </Card>
            <Card title="Comunicação Direta" bgColor="#69D2E7" txtColor="" txtAlign="center" bColor="#69D2E7">
                <Pai sobrenome="Nogueira" nome="João"></Pai>
            </Card>
            <Card title="Com conteudo First" bgColor="" txtColor="" txtAlign="center">
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
    </div>