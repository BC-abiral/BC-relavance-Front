import React, { Component } from 'react'

class PutRelavance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            relavance: this.props.value.relavance
        }
    }

    componentDidMount() {
        if (this.state.relavance == '') {
            this.setState({
                show: true
            })
        }
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    dropdownChanged = (e) => {
        this.setState({ relavance: e.target.value });
    }

    saveRelavance = () => {
        alert('save button clicked')
    }
    render() {
        const { relavance, show } = this.state

        if (show) {
            return (
                <form>
                    <div className="input-group">
                        <select className="custom-select" value={this.state.relavance} onChange={this.dropdownChanged}>
                            <option value="">Choose...</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" onClick={this.saveRelavance}>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            )
        } else {
            return (
                <button className="btn btn-link" onClick={this.toggleShow}>
                    {relavance == '1' ? 'Yes' : 'No'}
                </button>
            )
        }
    }
}

export default PutRelavance