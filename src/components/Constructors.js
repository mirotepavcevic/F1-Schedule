import React from 'react';
import { connect } from 'react-redux';
import { fetchConstructor } from '../actions/index';

class Constructors extends React.Component {

    componentDidMount() {

        this.props.fetchConstructor();
    }

    renderList() {
        return (
            <div className="drivers">
                <h2>Drivers Championship 1985</h2>
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nationality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.constructors.map((constructor, i) => {
                            if (constructor.constructorId !== undefined) {
                                return (
                                    <tr key={i}>
                                        <td>{constructor.name}</td>
                                        <td>{constructor.nationality}</td>
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
    return { constructors: Object.values(state.constructors) };
}



export default connect(
    mapStateToProps,
    { fetchConstructor }
)(Constructors);