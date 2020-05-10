import React from 'react';
import ReactDOM from 'react-dom';
import Carte from './meteocard.js';

class Meteo extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return(
			<Carte/>
		)
	}
}

export default Meteo;
