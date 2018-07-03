import React, { Component } from 'react'

class AddProject extends Component {
    render() {
        return (
            <form>
                <div class="form-row align-items-center">
                    <div className="col-auto">
                        <input type="Text" className="form-control" />
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