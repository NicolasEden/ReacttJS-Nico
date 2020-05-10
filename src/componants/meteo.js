import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

class MeteoBottom extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	render() {
	    var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septempbre", "Octobre", "Novembre", ];
	    var days = ["Dimanche", "Samedi", "Vendredi", "Jeudi", "Mercredi", "Mardi", "Lundi"];
	    
	    var date = new Date();
	    var month = months[date.getMonth()];
	    var day = days[date.getDay()];
	    var daynb = date.getDate();

	    const dateResult = day+" "+daynb+" "+month;
	    const mainIconCurrent = this.props.weather.weather[0].main
	    const mainCurrent = this.props.weather
	    var currentIcon = null;
	    var currentMessage = null;
		if (mainIconCurrent === 'Thunderstorm') {
			currentIcon = <FontAwesomeIcon icon={faBolt} />;
			currentMessage = "Orageux";
		} else if (mainIconCurrent === 'Drizzle') {
			currentIcon = <FontAwesomeIcon icon={faCloudRain} />;
			currentMessage = "Pluis légère";
		} else if (mainIconCurrent === 'Rain') {
			currentIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
			currentMessage = "Pluvieux";
		} else if (mainIconCurrent === 'Snow') {
			currentIcon = <FontAwesomeIcon icon={faSnowflake} />;
			currentMessage = "Neige";
		} else if (mainIconCurrent === 'Clear') {
			currentIcon = <FontAwesomeIcon icon={faSun} />;
			currentMessage = "Claire";
		} else if (mainIconCurrent === 'Clouds') {
			currentIcon = <FontAwesomeIcon icon={faCloud} />;
			currentMessage = "Nuageux";
		} else {
			currentIcon = <FontAwesomeIcon icon={faSmog} />;
			currentMessage = "Brume de pullution";
		}
    	return (
			<div className = "MeteoBottom"> 
				<h1 className="MeteoTitle">{this.props.forecast.city.name}, {this.props.country.name}</h1>
				<p className="MeteoDate">{dateResult}</p>
				<div>
					<div className = "currentTop">
						<p className="currentIcon">{currentIcon}</p>
						<div className = "currentTopLeft">
							<p className = "currentTemp">{new Number(mainCurrent.main.temp - 273.15).toFixed(1)} °C</p>
							<p className = "currentMsg">{currentMessage}</p>
						</div>
					</div>
					<div className = "currentBottomMain"> 
						<div className = "currentBottom">
							<div className = "currentElement">
								<p>{new Number(mainCurrent.main.temp_max - 273.15).toFixed(1)}°</p>
								<p>Maximale</p>
							</div>
							<div className = "currentElement">
								<p>{new Number(mainCurrent.wind.speed*1.609).toFixed(1)} km/h</p>
								<p>Vitesse du vent</p>
							</div>
							<div className = "currentElement">
								<p>{time(mainCurrent.sys.sunrise)}</p>
								<p>Lever du soleil</p>
							</div>
							<div className = "currentElement">
								<p>{new Number(mainCurrent.main.temp_min - 273.15).toFixed(1)}°</p>
								<p>Minimale</p>
							</div>
							<div className = "currentElement">
								<p>{mainCurrent.main.humidity}%</p>
								<p>Humidité</p>
							</div>
							<div className = "currentElement">
								<p>{time(mainCurrent.sys.sunset)}</p>
								<p>Coucher du soleil</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


function time(ts) {
	var now = new Date(ts*1000);
    var hour = now.getHours();
    var min = now.getMinutes();
    var heure = (hour > 9? hour:"0" + hour);
    heure += ":" + (min > 9? min:"0" + min);
    return heure;
}

export default MeteoBottom;
