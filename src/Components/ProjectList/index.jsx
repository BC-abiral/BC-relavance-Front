import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddProject from './AddProject'

class ProjectList extends Component {
    render() {
        return (
            <div>
                <AddProject />
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Project Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><Link to='/p1'>Project Name 1</Link></td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProjectList