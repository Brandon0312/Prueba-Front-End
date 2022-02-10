import React, { Component } from 'react'
import './modalInsertar.css'
export class ModalInsertar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sku: '',
            name: '',
            quantity: '',
            price: ''
        }
    }

    HndlChange = (e) => {
        this.setState({
            sku: e.target.name == "sku" && e.target.val,
            name: e.target.name == "name" && e.target.val,
            quantity: e.target.name == "quantity" && e.target.val,
            price: e.target.name == "price" && e.target.val
        })
        console.log(([this.state.sku, this.state.name, this.state.quantity, this.state.price]))
    }

    render() {
        return (
            <div className="modal " id="myModalInsertar" onClick={console.log(this.props.cerrar)}>
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Insertar Producto</h4>
                            <button className="btn-close" onClick={this.props.cerrar}></button>
                        </div>


                        <div className="modal-body">
                            <div className='list-group'>
                                <div className="list-group-item list-group-item-primary text-center">
                                    <label>SKU <p> </p>
                                        <input type="text" name="sku" onChange={this.HndlChange} />
                                    </label>
                                </div>
                                <div className="list-group-item list-group-item-primary text-center">
                                    <label>Nombre <p> </p>
                                        <input type="text" name="name" onChange={this.HndlChange} />
                                    </label>
                                </div>
                                <div className="list-group-item list-group-item-primary text-center">
                                    <label>Cantidad <p> </p>
                                        <input type="text" name="quantity" onChange={this.HndlChange} />
                                    </label>
                                </div>
                                <div className="list-group-item list-group-item-primary text-center">
                                    <label>Precio <p> </p>
                                        <input type="text" name="price" onChange={this.HndlChange} />
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={this.props.cerrar}>Cancelar</button>
                            <button className="btn btn-success" onClick={(e) => { this.props.agregar(e, this.state.info) }}>Agregar</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ModalInsertar