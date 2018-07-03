import React, { Component } from 'react'

class PutRelavance extends Component {
    render() {
        return (
            <form>
                <div class="input-group">
                    <select class="custom-select" id="inputGroupSelect04">
                        <option selected>Choose...</option>
                        <option value="1">true</option>
                        <option value="0">False</option>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button">Save</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default PutRelavance