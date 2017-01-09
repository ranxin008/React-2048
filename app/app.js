/**
 * Created by mr_wang on 2017/1/1.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './component/GameContainer';
import Tool from './tool';
import './css/index.css';


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

    handleKeyDown(event) {
        var newBoard = Tool.moveBoard(this.state.board, event.keyCode);
        var result = Tool.mergeBoard(newBoard, event.keyCode);
        newBoard = result.board;
        newBoard = Tool.moveBoard(newBoard);
        this.setState({
            board: newBoard
        });
        var newPostion = Tool.getRandomPostion(this.state.board);
        this.setState(function (preState) {
            var board = preState.board;
            var score = preState.score + result.score;
            board[newPostion[0]][newPostion[1]] = Tool.getRandom2OR4();
            return {
                score: score,
                board: board
            }
        });
        if(Tool.isWin(this.state.board)){
            alert('哇，你赢了！再来一盘吧！');
        }
        if(Tool.isLose(this.state.board)){
            alert('真遗憾！你输了，再来一盘吧！');
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
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