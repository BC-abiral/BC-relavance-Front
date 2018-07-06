import React, { Component } from 'react'
import { updateRelavance } from '../../../Utils/Services'

class PutRelavance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.value._id,
            show: false,
            relavance: this.props.value.relavance,
            classifierScore: this.props.value.classifierScore,
            error: false
        }
    }

    componentDidMount() {
        if (this.state.relavance === '') {
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
        if (this.state.relavance !== "")
            updateRelavance(this.state.relavance, this.state.id).then(resp => {
                console.log(resp.data)
                this.setState({
                    show: false
                })
            })
    }
    render() {
        const { relavance, show, classifierScore } = this.state

        if (show) {
            return (
                <form>
                    <div className="input-group">
                        <select className="custom-select"
                            value={this.state.relavance}
                            onChange={this.dropdownChanged}>
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
                    {relavance === '1' ? 'Yes' : 'No'} {relavance !== classifierScore ? <span class="badge" style={{ color: 'red' }}>not matched</span> : ''}
                </button>
            )
        }
    }
}

export default PutRelavance