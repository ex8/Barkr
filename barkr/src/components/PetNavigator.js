import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Pet from './Pet';

class PetNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petsAround: [],
            errorMessage: ''
        }
    }

    componentWillMount = () => {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push(`/login`);
        }
    };

    componentDidMount = () => {
        const token = localStorage.getItem(`jwtToken`);
        if (this.props.auth.isAuthenticated) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                 }
            }
            axios.get(`/api/pets-around`, config)
                .then(pets => {
                    this.setState({
                        petsAround: pets.data.pets
                    });
                }).catch(err => {
                    this.setState({
                        errorMessage: `Error fetching pets around; ${err}`
                    })
                });
        }
    };

    render() {
        return (
            <div>
                {this.state.petsAround.map(pet => (
                    <Pet pet={pet} key={pet._id}/>
                ))}
            </div>
        )
    };
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(PetNavigator));