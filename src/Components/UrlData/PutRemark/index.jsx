import React, { Component } from 'react'
import { updateRemark } from '../../../Utils/Services'

class PutRemark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.value._id,
            remark: this.props.value.remark,
            error: false,
            show: false
        }
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    onChange = (e) => {
        this.setState({ remark: e.target.value });
    }

    saveRemark = () => {
        if (this.state.remark !== '')
            updateRemark(this.state.remark, this.state.id).then(resp => {
                this.setState({
                    show: false
                })
            })
        else
            this.setState({
                error: 'The Remark is Empty'
            })
    }

    render() {
        const { show, error, remark } = this.state
        if (show)
            return (
                <div>
                    <div className="input-group">
                        <textarea className="form-control rounded-0"
                            onChange={this.onChange}
                            value={this.state.remark}></textarea>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" onClick={this.saveRemark}>
                                Save
                            </button>
                        </div>
                    </div>
                    {error !== '' ? <span className="text-danger">{error}</span> : ''}
                </div>
            )
        else
            return (
                <div>
                    {
                        remark !== '' ?
                            <button className="btn btn-link" onClick={this.toggleShow}>
                                {remark}
                            </button> :
                            <button className="btn btn-link" onClick={this.toggleShow}>
                                PutRemark
                            </button>
                    }
                </div>
            )
    }
}

export default PutRemark