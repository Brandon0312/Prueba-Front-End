import react, { Component } from 'react';
import Detalles from '../Detalles/Detalles';
import Modal from '../Modal/Modal';
import ModalInsertar from '../ModalInsertar/ModalInsertar';

export default class Tabla extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detalles: false,
            insertar: false,
            newRows: [],
            detalleinfo: []
        }
    }

    HndlClick = (ev, info = []) => {
        this.setState({ detalles: !this.state.detalles, detalleinfo: info })
        console.log('Vista Detalles');
    }
    HndlAgregar = (ev, newProds) => {
        this.setState({ newRows: newProds });
    }
    HndlMostrarInsertar = (e) => {
        this.setState({ insertar: !this.state.insertar })
    }

    render() {
        return (
            <>
                {this.state.detalles && <Modal click={(e) => this.HndlClick(e, this.state.detalleinfo)} info={this.state.detalleinfo} />}
                {this.state.insertar && <ModalInsertar agregar={(e) => this.HndlAgregar} cerrar={this.HndlMostrarInsertar} />}

                <div className="row center">

                    <table id="tbProducts" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <h4>OrderId</h4>
                                </th>
                                <th>
                                    <h4>Sku</h4>
                                </th>
                                <th>
                                    <h4>Nombre</h4>
                                </th>
                                <th>
                                    <h4>Cantidad</h4>
                                </th>
                                <th>
                                    <h4>Costo</h4>
                                </th>

                                <th>
                                    <button className='btn btn-danger' onClick={this.HndlMostrarInsertar}>Agregar +</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.orders.map((order, index) => {
                                return (
                                    <tr key={order.id}>
                                        <td >{order.number}</td>
                                        <td>{order.items[0].sku}</td>
                                        <td width={.72}>{order.name}</td>
                                        <td width={1}>{order.items[0].fulfillment.quantity}</td>
                                        <td>{order.items[0].price}</td>
                                        <td> <Detalles click={(e) => this.HndlClick(e, order)} /></td>
                                    </tr>
                                )
                            })
                            }
                            {this.state.newRows != [] ?
                                console.warn(this.state.newRows)
                                :
                                console.log(this.state.newRows)
                            }
                        </tbody>
                    </table>
                </div>
            </>

        )

    }
}