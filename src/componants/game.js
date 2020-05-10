import React from 'react';
import Tableau from './tab.js';
import './CSS/Morpion.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.ai) {
            this.state = {
                history: [{
                    squares: Array(9).fill(null),
                }],
                squares: Array(9).fill(null),
                stepNumber: 0,
                nb: 0,
                xIsNext: true,
                ai: true
            }
        } else {
            this.state = {
                history: [{
                    squares: Array(9).fill(null),
                }],
                squares: Array(9).fill(null),
                stepNumber: 0,
                nb: 0,
                xIsNext: true,
                ai: false
            }
        }
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            nb: this.state.nb+1,
            xIsNext: !this.state.xIsNext,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        var clearTab = []
        for (var i = 0; i < 8; i++) {
            if (current.squares[i] == null) clearTab.push(i)
        }
        let status;
        if (winner) status = winner + ' vient de gagner, félicitations !';
        else if (this.state.nb === 9 || this.state.nb === 10) status = "Match nul, félicitations !";
        else status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
        if (this.state.ai == true && this.state.xIsNext == false) this.handleClick(bestPosibilitie(current.squares, clearTab))
        console.log(this.state.nb);
        return (
            <div className="game">
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <div className="game-board">
                    <Tableau squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
            </div>
        );
    }
}


function calculateWinner(carre) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (carre[a] && carre[a] === carre[b] && carre[a] === carre[c]) return carre[a]
    }
    return null;
}

function bestPosibilitie(carre, clear) {
    for (var a = 0; a < 9; a++) {
        let testMap = Array.from(carre)
        console.log(testMap)
        if (testMap[a] == null) testMap[a] = "O"
        if (calculateWinner(testMap) == "O") return a
    }
    for (var a = 0; a < 9; a++) {
        let testMap = Array.from(carre)
        if (testMap[a] == null) testMap[a] = "X"
        if (calculateWinner(testMap) == "X") return a
    }
    return clear[Math.floor(Math.random() * clear.length)]
}

export default Game;
