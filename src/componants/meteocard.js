import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import MeteoBottom from './meteo.js';
import NotFound from './NotFound.js';
import './CSS/Meteo.css'


class Carte extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            "City":null,
            "Country":null,
            "Forecast":null,
            "Weather":null,
            "Error":false
        }
    }

    handleSearchCity = e => {
        if (e.keyCode === 13) {
            var entrie = e.target.value
            fetch("https://api.openweathermap.org/data/2.5/forecast?q="+entrie+"&APPID=fa956c3c094574e034c48dc970215933")
            .then(res => res.json())
            .then((forecast) => {
                    if (forecast.cod === "200") {
                        fetch("https://api.openweathermap.org/data/2.5/weather?q="+entrie+"&APPID=fa956c3c094574e034c48dc970215933")
                        .then(res => res.json())
                        .then((weather) => {
                            fetch("https://restcountries.eu/rest/v2/alpha/"+forecast.city.country)
                            .then(res => res.json())
                            .then((country) => {
                                this.setState({
                                    "City": forecast.city.name,
                                    "Country": country,
                                    "Forecast": forecast,
                                    "Weather": weather,
                                    "Error": this.state.Error
                                });
                            })
                        })
                    } else if (forecast.message.includes("city not found")) {
                        this.setState({
                            "City": "error",
                            "Error":true
                        });
                    } else {
                        this.setState({
                            "City": "apierror",
                            "Error":true
                        });
                    }
                },
                (error) => {}
            );
        }
    }

    render() {
        const SearchInput = styled.input`
            width: 100%;
            border: none;
            background-color: #ffffff;
            font-size: 20px;
            padding: 15px 25px 15px 60px;
            color: #c5c5c5;
            transition: 0.2s;
            border-radius: 30px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            &:focus {
                color: #191919;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                outline: none;
            }
        `;
        const SearchIcon = styled.span`
            display: block;
            position: absolute;
            top: 22px;
            left: 22px;
            transform: translate(-50%, -50%);
            height: 14px;
            width: 14px;
            font-size: 18px;
            color: #c5c5c5;
        `;
        const Title = {
            "cursor": "default",
            "display":"flex",
            "justifyContent":"center",
            "marginTop": "200px",
            "marginBottm": "auto",
            "marginLeft": "auto",
            "marginRight": "auto",
            "color": "#FFF",
            "textTransform": "uppercase",
            "fontWeight": "400",
            "maxWidth": "500px",
            "transition": "1.5s",
            "fontFamily": 'Montserrat'
        }
        const Title2 = {
            "cursor": "default",
            "display":"flex",
            "justifyContent":"center",
            "marginTop": "100px",
            "color": "#FFF",
            "textTransform": "uppercase",
            "fontWeight": "400",
            "position": "relative",
            "margin": "0 auto",
            "maxWidth": "500px",
            "transition": "1.5s",
            "opacity": "0",
            "fontFamily": 'Montserrat'
        }
        const Title3 = {
            "cursor": "default",
            "display":"flex",
            "justifyContent":"left",
            "fontSize": "20px",
            "marginTop": "25px",
            "color": "#FFF",
            "textTransform": "uppercase",
            "fontWeight": "400",
            "position": "relative",
            "marginLeft": "20px",
            "maxWidth": "500px",
            "transition": "1.5s",
            "opacity": "0",
            "fontFamily": 'Montserrat',
        }
        const Title4 = {
            "cursor": "default",
            "display":"flex",
            "justifyContent":"left",
            "fontSize": "20px",
            "marginTop": "25px",
            "color": "#FFF",
            "textTransform": "uppercase",
            "fontWeight": "400",
            "position": "relative",
            "marginLeft": "20px",
            "maxWidth": "500px",
            "transition": "1.5s",
            "opacity": "1",
            "fontFamily": 'Montserrat',
            "animationName": "FadeTopIn",
            "animationDuration": "1.5s",
            "animationDelay": "1.5s",
            "animationFillMode": "forwards",
        }
        const SearchBar = {
            "display":"flex",
            "justifyContent":"center",
            "top": "6vh",
            "position": "relative",
            "margin": "0 auto",
            "maxWidth": "500px",
            "transition": "1.5s",
        };
        const SearchBar2 = {
            "display":"flex",
            "justifyContent":"center",
            "top": "6vh",
            "position": "relative",
            "margin": "0 auto",
            "maxWidth": "500px",
            "transition": "1.5s",
        }
        if (this.state.City === null) {
            return (
                <div>
                    <h1 style = {Title3}>APPLICATION Météo</h1>
                    <h1 style = {Title}>APPLICATION Météo</h1>
                    <div style={SearchBar}>
                        <SearchInput onKeyUp={this.handleSearchCity} onChange={this.handleInputChange} placeholder="Entrez une ville" />
                        <SearchIcon>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </SearchIcon>
                    </div>
                </div>
            );
        } else {
            if (this.state.Error == true) {
                if (this.state.City === "apierror") {
                    return (
                    <div>
                        <h1 style = {Title4}>APPLICATION Météo</h1>
                        <h1 style = {Title2}>APPLICATION Météo</h1>
                        <div style={SearchBar2}>
                            <SearchInput onKeyUp={this.handleSearchCity} onChange={this.handleInputChange} placeholder="Entrez une ville" />
                            <SearchIcon>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchIcon>
                        </div>
                        <NotFound value="Désolé, suite à des problèmes techniques, nous ne pouvons pas donner suite a votre requette." leave="false"></NotFound>
                    </div>
                    );
                } else if (this.state.City === "error") {
                    return (
                    <div>
                        <h1 style = {Title4}>APPLICATION Météo</h1>
                        <h1 style = {Title2}>APPLICATION Météo</h1>
                        <div style={SearchBar2}>
                            <SearchInput onKeyUp={this.handleSearchCity} onChange={this.handleInputChange} placeholder="Entrez une ville" />
                            <SearchIcon>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchIcon>
                        </div>
                        <NotFound value="Désolé, la ville spécifiée n'a pas été trouvée" leave="false"></NotFound>
                    </div>
                    );
                } else {
                    return (
                    <div>
                        <h1 style = {Title4}>APPLICATION Météo</h1>
                        <h1 style = {Title2}>APPLICATION Météo</h1>
                        <div style={SearchBar2}>
                            <SearchInput onKeyUp={this.handleSearchCity} onChange={this.handleInputChange} placeholder="Entrez une ville" />
                            <SearchIcon>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchIcon>
                        </div>
                        <NotFound value="Désolé, la ville spécifiée n'a pas été trouvée" leave="true"></NotFound>
                        <MeteoBottom forecast={this.state.Forecast} weather={this.state.Weather} country={this.state.Country}> </MeteoBottom>
                    </div>
                    );
                }
            } 
            this.state.Error = false
            return (
                <div><h1 style = {Title4}>APPLICATION Météo</h1>
                    <h1 style = {Title2}>APPLICATION Météo</h1>
                    <div style={SearchBar2}>
                        <SearchInput onKeyUp={this.handleSearchCity} onChange={this.handleInputChange} placeholder="Entrez une ville" />
                        <SearchIcon>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </SearchIcon>
                    </div>
                    <MeteoBottom forecast={this.state.Forecast} weather={this.state.Weather} country={this.state.Country}> </MeteoBottom>
                </div>
            );
        }
    }
}

export default Carte;
