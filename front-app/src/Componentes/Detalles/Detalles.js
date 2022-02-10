import React, { Component } from 'react'

export class Detalles extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className='btn btn-success' onClick={this.props.click} >Detalle</button>
        )
    }
}

export default Detalles