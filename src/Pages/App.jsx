import React, { Component } from 'react'
import ProjectList from '../Components/ProjectList'
class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <hr />
                <ProjectList />
            </div>
        )
    }
}

export default App