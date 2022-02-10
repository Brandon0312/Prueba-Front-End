import react from 'react';

export default function Tabla(props) {
    return (
        <>
            <div className="row center">

                <table className="table table-striped">
                    <thead>
                        <tr>
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
                        </tr>
                    </thead>
                    <tbody>
                        {props.orders.map((order, index) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.items[0].sku}</td>
                                    <td>{order.name}</td>
                                    <td>{order.items[0].fulfillment.quantity}</td>
                                    <td>{order.items[0].price}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>

    )
}