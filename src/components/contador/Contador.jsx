import React, { Component } from 'react'
import Display from './Display'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    
    updatePasso = (event) => {
        this.setState({
            passo: parseInt(event.target.value)
        })
    }
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <Display valor={this.state.valor}></Display>

                <div>
                    <input type="number" value={this.state.passo} onChange={this.updatePasso} placeholder="Passo" />
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}