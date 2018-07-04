import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UrlData from '../Components/UrlData';
import { getProjectDetail } from '../Utils/Services'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pname: '',
            vname: this.props.match.params.vtag,
            id: this.props.match.params.pname
        }
    }

    componentDidMount() {
        const id = this.props.match.params.pname
        if (this.state.pname === '') {
            getProjectDetail(id).then((resp) => {
                this.setState({
                    pname: resp.data.name
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1>
                    <Link to={`/${this.state.id}`}>{this.state.pname}</Link> - {this.state.vname}
                </h1>
                <hr />
                <Link to="/">Back to Project Page </Link>
                <br /><br />
                <UrlData params={this.props.match.params} />
            </div>
        )
    }
}

export default Detail