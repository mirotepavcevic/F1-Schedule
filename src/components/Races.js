import React from 'react';
import { connect } from 'react-redux';
import { fetchRace } from '../actions/index';

class Races extends React.Component {

    componentDidMount() {
        this.props.fetchRace();
    }

    renderList() {
        console.log('data', this.props)
        return (
            <div className="drivers">
                <h2>Drivers Championship 1985</h2>
                <table >
                    <thead>
                        <th>Race</th>
                        <th>Locality</th>
                        <th>Country</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {this.props.races.map((race, i) => {
                            if (race.season !== undefined) {
                                return (
                                    <tr key={i}>
                                        <td>{race.raceName}</td>
                                        <td>{race.Circuit.Location.locality}</td>
                                        <td>{race.Circuit.Location.country}</td>
                                        <td>{race.date}</td>
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
    return { races: Object.values(state.races) };
}


export default connect(
    mapStateToProps,
    { fetchRace }
)(Races);