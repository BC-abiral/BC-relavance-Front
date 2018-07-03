import React, { Component } from 'react'
import { uploadNewVersion } from '../../../Utils/Services'

class UploadData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            pid: this.props.pid,
            vname: '',
            error: '',
            reload: false
        }
    }

    pageReload = (e) => {
        window.location.reload()
    }

    changeVname = (e) => {
        this.setState({
            vname: e.target.value
        })
    }

    onFileChange = (e) => {
        this.setState({ file: e.target.files[0] })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { file, pid, vname } = this.state
        if (file !== null && vname !== '') {
            var bodyFormData = new FormData()
            bodyFormData.set('sampleFile', this.state.file)
            bodyFormData.set('projectId', this.state.pid)
            bodyFormData.set('version', this.state.vname)
            uploadNewVersion(bodyFormData).then(resp => {
                this.setState({
                    file: null,
                    vname: '',
                    error: '',
                    reload: true
                })
            })
        } else {
            this.setState({
                error: 'Add Version name and choose file'
            })
        }
    }

    render() {
        if (this.state.reload) {
            return (
                <div>
                    <button className="btn btn-success" onClick={this.pageReload}>Reload</button>
                </div>
            )
        } else {
            return (
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <input type="Text" className="form-control" placeholder="vname"
                                onChange={this.changeVname} />
                            {this.state.error !== '' ? <span>{this.state.error}</span> : ''}
                        </div>
                        <div className="col-auto">
                            <input type="file" name="sampleFile" className="form-control-file"
                                onChange={this.onFileChange} />
                        </div>
                        <div className="col-auto">
                            <input type='submit' className="btn btn-primary" value='Upload!' />
                        </div>
                    </div>
                </form>
            )
        }
    }
}

export default UploadData