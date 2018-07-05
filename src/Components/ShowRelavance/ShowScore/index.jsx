import React, { Component } from 'react'
import { calculateScore } from '../../../Utils/Services'

class ShowScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.pid,
            value: this.props.value,
            score: this.props.value.score
        }
    }

    calculate = () => {
        const { id, value } = this.state
        calculateScore(id, value.name).then(res => {
            this.setState({
                score: res.data.score
            })
        }).catch(error => {
            alert("Fill all the relavance score")
        })
    }

    render() {
        return (
            <button className="btn btn-link"
                onClick={this.calculate}>
                {this.state.score === '-' ? 'Calculate' : this.state.score}
            </button>
        )
    }
}

export default ShowScore