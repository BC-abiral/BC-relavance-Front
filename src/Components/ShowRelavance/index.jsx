import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProjectDetail, getVersionForProject } from '../../Utils/Services'
import UploadData from './UploadData'

class ShowRelavance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pname: '',
            data: []
        }
    }

    componentDidMount() {
        const id = this.props.pid
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
                <UploadData pid={this.props.pid} />
                <br />
                <table className="table table-strip table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Version Name</th>
                            <th>Relavence Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, index) => (
                                <tr key={value._id}>
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.score}</td>
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