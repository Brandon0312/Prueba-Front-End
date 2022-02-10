import React, { Component } from 'react'
import './modal.css'

export class Modal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="modal " id="myModal" onClick={console.log(this.props.info)}>
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button className="btn-close" onClick={this.props.click}></button>
                        </div>


                        <div className="modal-body">
                            <div className='list-group'>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Numero de pedido <span className='badge bg-secondary'>{this.props.info.number}</span></p>
                                </div>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Domicilio de entrega <span className='badge bg-secondary'>{this.props.info.billingAddress.address1} {this.props.info.billingAddress.city}</span></p>
                                </div>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Paquetería <span className='badge bg-secondary'>{this.props.info.billingAddress.address1}</span></p>
                                </div>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Nombre del Comprador<span className='badge bg-secondary'>{this.props.info.billingAddress.firstName} {this.props.info.billingAddress.lastName} </span></p>
                                </div>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Telefono <span className='badge bg-secondary'>{this.props.info.billingAddress.phone} </span></p>
                                </div>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Numero del Vendedor <span className='badge bg-secondary'>{this.props.info.shippingAddress.firstName} {this.props.info.shippingAddress.lastName}</span></p>
                                </div>
                                <div className="list-group-item list-group-item-primary text-start">
                                    <p>Telefono<span className='badge bg-secondary'>{this.props.info.shippingAddress.phone} </span></p>
                                </div>
                                <div className="list-group-item list-group-item-success text-start">
                                    <p>Descuento <span className='badge bg-secondary'>{this.props.info.totals.discount}</span></p>
                                    <p>Descuento <span className='badge bg-secondary'>{this.props.info.totals.shipping}</span></p>
                                    <p>Descuento <span className='badge bg-secondary'>{this.props.info.totals.subtotal}</span></p>
                                    <p>Descuento <span className='badge bg-secondary'>{this.props.info.totals.tax}</span></p>
                                    <p>Descuento <span className='badge bg-primary'>{this.props.info.totals.total}</span></p>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={this.props.click}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Modal