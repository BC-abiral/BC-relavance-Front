import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddProject from './AddProject'
import { getAllProject, addProject } from '../../Utils/Services'

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        getAllProject().then((resp) => {
            console.log(resp.data)
            this.setState({
                projects: resp.data
            })
        })
    }

    addProject = (pname) => {
        addProject(pname).then((resp) => {
            this.setState(prevState => {
                return {
                    projects: [...prevState.projects, resp.data]
                }
            })
        })
    }

    render() {
        const { projects } = this.state
        return (
            <div>
                <AddProject addfunction={this.addProject} />
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
                        {
                            projects ?
                                projects.map(value => (
                                    <tr key={value._id}>
                                        <td>1</td>
                                        <td><Link to={`/${value._id}`}>{value.name}</Link></td>
                                        <td>-</td>
                                    </tr>
                                ))
                                : "No Project Found"
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProjectList