/**
 * Created by mr_wang on 2017/1/1.
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import 'css/index.css';
require('./css/index.css');

//棋盘为二维数组
var intialBoard =
    [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ];

var score = 0;




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: intialBoard,
            score: score
        };
    }

    render() {
        return (
            <div className="app">
                <div className="heading">
                    <span className="title">2048</span>
                    <span className="score-container">
                        <div className="score-tip">score</div>
                        <div className="score">{this.state.score}</div>
                    </span>
                </div>
                <div className="game-intro">
                    <span className="subtitle">2048 developed by React</span>
                    <span className="restart-container">New Game</span>
                </div>
                <div className="game-container">
                    <div className="grid-row">
                        <div className="grid-col">
                            <div className="tile value2">1024</div>
                        </div>
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col-end">12</div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col-end">12</div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col-end">12</div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col">12</div>
                        <div className="grid-col-end">12</div>
                    </div>
                </div>

            </div>
        );
    }
}


ReactDOM.render(<App />,document.getElementById('app'));