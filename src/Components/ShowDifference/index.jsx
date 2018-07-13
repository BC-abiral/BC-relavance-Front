import React, { Component } from 'react'
import { getVersionForProject, showDifference } from '../../Utils/Services'
import PutRelavance from '../UrlData/PutRelavance';

class ShowDifference extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filter: '',
            B: this.props.params.vtag,
            pid: this.props.params.pname,
            compare_data: []
        }
    }

    componentDidMount() {
        const id = this.props.params.pname
        getVersionForProject(id).then(resp => {
            this.setState({
                data: resp.data
            })
        })
    }

    applyFilter = () => {
        const { filter, B, pid } = this.state
        if (this.state.filter !== '')
            showDifference(filter, B, pid).then(resp => {
                this.setState({
                    compare_data: resp.data
                })

                if (resp.data.length === 0)
                    alert("No Data Available")
            })
    }

    dropdownChanged = (e) => {
        this.setState({ filter: e.target.value });
    }

    render() {
        const { data, B, compare_data } = this.state
        return (
            <div>
                <div className="compare">
                    <div className="input-group">
                        <select className="custom-select"
                            value={this.state.filter}
                            onChange={this.dropdownChanged}
                        >
                            <option value="">Choose...</option>
                            {
                                data.map(value => {
                                    if (value.name !== B)
                                        return <option key={value._id} value={value.name} > {value.name}</option>
                                    else
                                        return null
                                })
                            }
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" onClick={this.applyFilter}>
                                Compare
                        </button>
                        </div>
                    </div>
                </div>

                {
                    compare_data.length !== 0 ?
                        <div className="Show Result">
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
                                        compare_data.map((value, index) => (
                                            value.relavance === '1' &&
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
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div> : ''
                }
            </div>
        )
    }
}

export default ShowDifference