import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game.js';

class Morpion extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return(
			<Game ai/>
		)
	}
}

export default Morpion;
