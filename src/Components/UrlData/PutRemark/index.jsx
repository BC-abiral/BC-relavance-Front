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
                    <div className="modal fade show" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Remark</h4>
                                    <button className="close" type="button" onClick={this.toggleShow}>
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <textarea className="form-control rounded-0"
                                        onChange={this.onChange}
                                        value={this.state.remark} />
                                    {error !== '' ? <span className="text-danger">{error}</span> : ''}
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" type="button" onClick={this.saveRemark}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </div>
            )
        else
            return (
                <div>
                    {
                        remark !== '' ?
                            <button className="btn btn-link" onClick={this.toggleShow} style={{color:'green'}}>
                                <i className="fas fa-eye"></i>
                            </button> :
                            <button className="btn btn-link" onClick={this.toggleShow} style={{color:'red'}}>
                                <i className="fas fa-edit"></i>
                            </button>
                    }
                </div>
            )
    }
}

export default PutRemark