import React, { Component } from 'react'
import ShowRelavance from '../Components/ShowRelavance';

class Ppage extends Component {
    render() {
        return (
            <div className="container">
                <ShowRelavance pid={this.props.match.params.pname} />
            </div >
        )
    }
}

export default Ppage