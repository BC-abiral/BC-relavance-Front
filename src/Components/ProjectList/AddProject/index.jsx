import React, { Component } from 'react'

class AddProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pname: '',
            error: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { pname, error } = this.state
        if (pname == '')
            this.setState({
                error: 'Please specify Project Name'
            })
        else {
            this.props.addfunction(pname)
            this.setState({
                pname: ''
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            pname: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <input type="Text" className="form-control" value={this.state.pname} onChange={this.handleChange} />
                        {this.state.error ? <span>{this.state.error}</span> : ''}
                    </div>
                    <div className="col-auto">
                        <input type="submit" className="btn btn-primary" value="Add Project" />
                    </div>
                </div>
            </form>
        )
    }
}

export default AddProject