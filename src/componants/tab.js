import React from 'react';

function Square(props) {
    if (props.value === "X") {
        return (
            <button onClick={props.onClick} className={props.className+" squareX"}> {props.value} </button>
        );
    } else if (props.value === "O") {
        return (
            <button onClick={props.onClick} className={props.className+" squareO"}> {props.value} </button>
        );
    } else {
        return (
            <button onClick={props.onClick} className={props.className}> {props.value} </button>
        );
    }
}


const classTab = ["top-left", "top", "top-right", "middle-left", "middle", "middle-right", "bottom-left", "bottom", "bottom-right"]
class Tableau extends React.Component {
    Square(i) {
        return (
            <Square className={classTab[i]} value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
        );
    }

    render() {
        return (
            <div className="morpionBody">
                <div>
                    <div className="tab-row">
                      {this.Square(0)}
                      {this.Square(1)}
                      {this.Square(2)}
                    </div>
                    <div className="tab-row">
                      {this.Square(3)}
                      {this.Square(4)}
                      {this.Square(5)}
                    </div>
                    <div className="tab-row">
                      {this.Square(6)}
                      {this.Square(7)}
                      {this.Square(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tableau;
