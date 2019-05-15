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
            errorMessage: '',
            currentPet: {},
            counter: 0,
            isEnd: false
        }
    }

    componentWillMount = () => {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push(`/login`);
        }
    };

    componentDidMount = () => {
        if (this.props.auth.isAuthenticated) {
            const token = localStorage.getItem(`jwtToken`);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                 }
            }
            axios.get(`/api/pets-around`, config)
                .then(pets => {
                    this.setState({
                        petsAround: pets.data.pets,
                        currentPet: pets.data.pets[this.state.counter]
                    });
                }).catch(err => {
                    this.setState({
                        errorMessage: `Error fetching pets around; ${err}`
                    })
                });
        }
    };

    onDislikeClick = () => {
        if (this.state.petsAround.length - 1 === this.state.counter) {
            this.setState({
                isEnd: true
            });
        }
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            currentPet: this.state.petsAround[prevState.counter + 1]
        }));
    };

    onLikeClick = () => {
        if (this.state.petsAround.length - 1 === this.state.counter) {
            this.setState({
                isEnd: true
            });
        }
        if (this.props.auth.isAuthenticated) {
            const token = localStorage.getItem(`jwtToken`);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                 }
            }
            axios.post(`/api/add-like`, {id: this.state.currentPet._id}, config)
            .then(response => {
                if (response.data.success) {
                    this.setState(prevState => ({
                        counter: prevState.counter + 1,
                        currentPet: this.state.petsAround[prevState.counter + 1]
                    }));
                }
            })
            .catch(err => console.error(`Error adding liked pet; ${err}`));
        }
    };

    render() {
        return (
            <div>
                {!this.state.isEnd && <Pet 
                    key={this.state.currentPet._id}
                    pet={this.state.currentPet} 
                    handleDislikeClick={this.onDislikeClick}
                    handleLikeClick={this.onLikeClick} 
                />}
                {this.state.isEnd && 'End of pets around...'}
            </div>
        )
    };
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(PetNavigator));