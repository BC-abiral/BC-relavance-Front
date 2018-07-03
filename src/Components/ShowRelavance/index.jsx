import React, { Component } from 'react'
import UploadData from './UploadData'

class ShowRelavance extends Component {
    render() {
        return (
            <div>
                <UploadData />
                <br />
                <table className="table table-strip table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Version Name</th>
                            <th>Relavence Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>V1</td>
                            <td>0.5</td>
                            <td><a href="p1/123/view">View</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>V2</td>
                            <td>-</td>
                            <td><a href="p1/123/view">Calculate</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShowRelavance