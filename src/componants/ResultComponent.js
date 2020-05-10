import React, {Component} from 'react';

class ResultComponent extends Component {
render() {
    let {result} = this.props;
    return (
        <div className="result">
            <div class="resultdiv">
                <p>{result}</p>
            </div>
        </div>
        )
    }
}


export default ResultComponent;
