import './Card.css'
import React from 'react'

export default props =>

    <div className="card" style={{
        textAlign: props.txtAlign || 'left',
        borderColor: props.bColor || '#000'
    }}>
        <div className="content">
            {props.children}
        </div>
        <div className="footer" style={{
            backgroundColor: props.bgColor || '#000',
            color: props.txtColor || 'white',
        }}>
            {props.title}
        </div>
    </div>