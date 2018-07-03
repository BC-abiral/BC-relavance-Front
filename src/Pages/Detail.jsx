import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UrlData from '../Components/UrlData';

class Detail extends Component {
    render() {
        return (
            <div className="container">
                <h1>
                    V1 Relavance - Pname
                </h1>
                <hr />
                <Link to="/">Back to Project Page </Link>
                <br /><br />
                <UrlData />
            </div>
        )
    }
}

export default Detail