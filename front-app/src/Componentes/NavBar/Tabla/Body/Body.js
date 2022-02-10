import React from "react";
import Tabla from "../Tabla";

class Body extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            fetching: true
        }
    }

    componentDidMount() {
        fetch('https://eshop-deve.herokuapp.com/api/v2/orders', {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                this.setState({ items: response.orders, fetching: false })
            });
    }

    render() {

        if (this.state.fetching) {
            return <h2>Cargando...</h2>
        }
        return <Tabla />
    }
}

export default Body;

