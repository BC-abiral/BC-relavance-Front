import React, { Component } from 'react'

class UploadData extends Component {
    render() {
        return (
            <form ref='uploadForm'
                id='uploadForm'
                action='http://localhost:3000/upload'
                method='post'
                encType="multipart/form-data">
                <div class="form-row align-items-center">
                    <input type="hidden" value="12345" />
                    <div className="col-auto">
                        <input type="Text" className="form-control" placeholder="vname" />
                    </div>
                    <div class="col-auto">
                        <input type="file" name="sampleFile" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div className="col-auto">
                        <input type='submit' className="btn btn-primary" value='Upload!' />
                    </div>
                </div>
            </form>
        )
    }
}

export default UploadData