import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NotfoundIcon = styled.span`
    display: block;
    text-align: center;
    color: #ffffff;
    font-size: 40px;
    margin-right: 10px;
    transition: 0.35s;
    `;

const NotFoundText = styled.span`
    color: #ffffff;
    font-size: 17px;
`;

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        if (this.props.leave === "false") {
            return (
                <div className = "NotFoundWrapper">
                    <NotfoundIcon>
                        <FontAwesomeIcon icon={faFrown}></FontAwesomeIcon>
                    </NotfoundIcon>
                    <NotFoundText>{this.props.value}</NotFoundText>
                </div>
            );
        } else {
            return (
                <div className = "NotFoundWrapper2">
                    <NotfoundIcon>
                        <FontAwesomeIcon icon={faFrown}></FontAwesomeIcon>
                    </NotfoundIcon>
                    <NotFoundText>{this.props.value}</NotFoundText>
                </div>
            );
        }
    }
}

export default NotFound;
