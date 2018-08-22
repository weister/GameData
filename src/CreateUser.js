import React from 'react';
import PropTypes from 'prop-types';

class CreateUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				firstName: '',
				lastName: '',
				userName: '',
				games: 0
			}
		}
	}

	handleChange = (event) => {
		const {name, value} = event.target;
		this.setState((currentState) => ({
				user: {
					...currentState.user,
					[name]: value
				}
			})
		)
	}

	createNewUser = event => {
		event.preventDefault();
		this.props.createNewUser(this.state.user);
	}

	invalidInput = () => {
		if(this.state.user.firstName === '' || this.state.user.lastName === '') {
			return true;
		}
		return false;
	}

	render() {
		const {firstName, lastName, userName, games} = this.state.user;
		return (
			<div>
				<h3>Create New User</h3>	
				<form onSubmit={this.createNewUser}>
					<input
						type='text'
						placeholder='first name'
						name='firstName'
						value={firstName}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						placeholder='last name'
						name='lastName'
						value={lastName}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						placeholder='user name'
						name='userName'
						value={userName}
						onChange={this.handleChange}
					/>					
					<input
						type='number'
						placeholder='first name'
						name='games'
						value={games}
						onChange={this.handleChange}
					/>
					<button disabled={this.invalidInput()}>Submit</button>
				</form>
			</div>			
		)		
	}
}

CreateUser.propTypes = {
	createNewUser: PropTypes.func.isRequired
}

export default CreateUser