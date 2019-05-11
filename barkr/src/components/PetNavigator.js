import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class PetNavigator extends Component {
    componentDidMount = () => {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push(`/`);
        }
    };

    render() {
        return (
            <div>
                show pets around...
            </div>
        )
    };
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default (connect(mapStateToProps))(withRouter(PetNavigator));
