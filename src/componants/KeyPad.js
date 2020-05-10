import React, {Component} from 'react';

const keypadTab = [
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "",
        "display": "("
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "C",
        "display": "C"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": ")",
        "display": ")"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "/",
        "display": "/"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "1",
        "display": "1"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "2",
        "display": "2"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "3",
        "display": "3"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "+",
        "display": "+"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "4",
        "display": "4"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "5",
        "display": "5"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "6",
        "display": "6"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "-",
        "display": "-"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "7",
        "display": "7"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "8",
        "display": "8"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "9",
        "display": "9"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "*",
        "display": "X"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": "CE",
        "display": "CE"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "number calcul",
        "name": "0",
        "display": "0"
    },
    {
        "click": "{e => this.props.onClick(e.target.name)}",
        "class": "option calcul",
        "name": ".",
        "display": "."
    },
    {
        "click": "e => this.props.onClick(e.target.name)",
        "class": "result calcul",
        "name": "=",
        "display": "="
    }
]

class Keypad extends Component {
    render() {
        return (
            <div className="button">
                {keypadTab.map((item, i) => (
                    <button class={item.class} name={item.name} onClick={e => this.props.onClick(e.target.name)}>{item.display}</button>
                ))}
            </div>
        );
    }
}

export default Keypad;
