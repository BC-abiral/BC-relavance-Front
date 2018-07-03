import React, { Component } from 'react'
import { getProjectDetail } from '../../Utils/Services'
import UploadData from './UploadData'

class ShowRelavance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pname: ''
        }
    }

    componentDidMount() {
        const id = this.props.pid
        if (this.state.pname === '') {
            getProjectDetail(id).then((resp) => {
                console.log(resp.data.name)
                this.setState({
                    pname: resp.data.name
                })
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.pname}</h1>
                <hr />
                <UploadData />
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
                        <tr>
                            <td>1</td>
                            <td>V1</td>
                            <td>0.5</td>
                            <td><a href="p1/123/view">View</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>V2</td>
                            <td>-</td>
                            <td><a href="p1/123/view">Calculate</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShowRelavance