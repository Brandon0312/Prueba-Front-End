import react from 'react';

export default function Tabla() {
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
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </>

    )
}