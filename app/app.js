/**
 * Created by mr_wang on 2017/1/1.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './component/GameContainer';
import Tool from './tool';

// import 'css/index.css';
require('./css/index.css');

//棋盘为二维数组

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            board: Tool.intialBoard()
        };
        this.handleReStartGame = this.handleReStartGame.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleReStartGame() {
        this.setState({
            score: 0,
            board: Tool.intialBoard()
        });
    }

    handleKeyDown(event){
        var newBoard = Tool.moveBoard(this.state.board,event.keyCode);
        this.setState({
            board: newBoard
        });

    }

    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown);
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
                    <span className="restart-container" onClick={this.handleReStartGame}>New Game</span>
                </div>
                <GameContainer board={this.state.board}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));