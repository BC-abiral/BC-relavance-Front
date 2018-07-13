import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProjectDetail, getVersionForProject } from '../../Utils/Services'
import UploadData from './UploadData'
import ShowScore from './ShowScore'

class ShowRelavance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pname: '',
            data: [],
            admin: ''
        }
    }

    componentDidMount() {
        const id = this.props.pid

        if (this.state.admin === '' && localStorage.admin !== undefined) {
            this.setState({
                admin: localStorage.admin
            })
        }

        if (this.state.pname === '') {
            getProjectDetail(id).then((resp) => {
                this.setState({
                    pname: resp.data.name
                })
            })
        }

        getVersionForProject(id).then(resp => {
            this.setState({
                data: resp.data
            })
        })
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <h1><Link to='/'>Back</Link> - {this.state.pname}</h1>
                <hr />
                {
                    this.state.admin === "true" ?
                        <UploadData pid={this.props.pid} />
                        : <div>Not Authorized to add versions</div>
                }
                <br />
                <table className="table table-strip table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Version Name</th>
                            <th>Relevance Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, index) => (
                                <tr key={value._id}>
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>
                                        <ShowScore pid={this.props.pid} value={value} />
                                    </td>
                                    <td><Link to={`${this.props.pid}/${value.name}/view`}>View</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShowRelavance