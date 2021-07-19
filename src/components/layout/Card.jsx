import './Card.css'
import React from 'react'

export default props =>

    <div className="card">
        <div className="title">
            {props.title}
        </div>
        <div className="content">
            {props.children}
        </div>
        <div className="footer">
            Rodapé Padrão:
            {props.footer}
        </div>
    </div>