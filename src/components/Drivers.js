import React from 'react';
import { connect } from 'react-redux';
import { fetchDriver } from '../actions/index';

class Drivers extends React.Component {


    componentDidMount() {
        this.props.fetchDriver();
    }

    renderList() {


        return (
            <div className="drivers">
                <h2>Drivers Championship 1985</h2>
                <table >

                    <thead>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Nationality</th>
                    </thead>
                    <tbody>
                        {this.props.drivers.map((driver, i) => {
                            if (driver.driverId !== undefined) {
                                return (
                                    <tr key={i}>
                                        <td>{driver.givenName + ' ' + driver.familyName}</td>
                                        <td>{driver.dateOfBirth}</td>
                                        <td>{driver.nationality}</td>
                                    </tr>
                                )
                            }

                        })}
                    </tbody>
                </table>
            </div>

        )

    }

    render() {
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { drivers: Object.values(state.drivers) };
}



export default connect(
    mapStateToProps,
    { fetchDriver }
)(Drivers);