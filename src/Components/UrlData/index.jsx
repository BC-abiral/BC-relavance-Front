import React, { Component } from 'react'
import PutRelavance from './PutRelavance'
import { showAllDataForVersion } from '../../Utils/Services'

class UrlData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const { pname, vtag } = this.props.params
        showAllDataForVersion(pname, vtag).then(resp => {
            this.setState({
                data: resp.data
            })
        })
    }

    render() {
        const { data } = this.state
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>URL</th>
                        <th>Classifier</th>
                        <th>Relevance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ?
                            data.map((value, index) => (
                                <tr key={value._id}>
                                    <td>{index + 1}</td>
                                    <td className="url_table">
                                        <a href={value.originUrl} target="_blank" rel="noopener noreferrer">
                                            {value.originUrl}
                                        </a>
                                    </td>
                                    <td>{value.classifierScore}</td>
                                    <td>
                                        <PutRelavance value={value} />
                                    </td>
                                </tr>
                            )) : "No data Found"
                    }
                </tbody>
            </table>
        )
    }
}

export default UrlData