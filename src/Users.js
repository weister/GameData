import React from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList';

class Users extends React.Component {	
	state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
  	this.setState(currentState => ({
  		showGamesPlayed: !currentState.showGamesPlayed
  	}))
  }

	render() {
		const {users} = this.props;
		const { showGamesPlayed } = this.state;

    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );

		if(users.length === 0) {
			return <p>There is no one here... You can become the our first member!</p>
		}

		return (
			<div>
				{users && users.length > 0 ? gamesPlayedButton : ''}
				<ul>
					{users.map(user => (
						<UserList key={user.userName} user={user} showGamesPlayed={showGamesPlayed}/>
					))}
				</ul>
			</div>
		)
	}
} 

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users