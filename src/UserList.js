import React from 'react';
import PropTypes from 'prop-types';

const UserList = props => {
	const userName = props.user.userName;
	const games = props.user.games;
	const showGamesPlayed = props.showGamesPlayed;

	return(
		<li className='user'>
			<p>Username: {userName}</p>
			<p>Number of Games Played: { showGamesPlayed ? games : '*'}</p>
		</li>
	)
}

UserList.propTypes = {
	user: PropTypes.object.isRequired,
	showGamesPlayed: PropTypes.bool.isRequired
}

export default UserList