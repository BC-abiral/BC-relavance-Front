import React, { Component } from 'react'
import PutRelavance from './PutRelavance'

class UrlData extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>URL</th>
                        <th>Relavance</th>
                    </tr>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>
                        <a href="https://www.fortlauderdale.gov/home/showdocument?id=18838" target="_blank" rel="noopener noreferrer">
                            https://www.fortlauderdale.gov/home/showdocument?id=18838
                        </a>
                    </td>
                    <td>
                        <PutRelavance uid={'1213'} />
                    </td>
                </tbody>
            </table>
        )
    }
}

export default UrlData