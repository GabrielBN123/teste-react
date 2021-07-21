import './MegaSena.css'

import React, { useState } from 'react'
import Display from './Display'
import Button from './Button'

export default (props) => {

    const [num, setNum] = useState(0)

    function randomNumber() {
        setNum(Math.floor((Math.random() * 100) + 0))
    }

    return (
        <div>
            <Display numMega={num}></Display>
            <Button clickRandom={randomNumber}></Button>
        </div>
    )
}