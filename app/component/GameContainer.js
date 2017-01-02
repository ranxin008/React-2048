/**
 * Created by wanglei on 2017/1/2.
 */
import React from 'react';
import Tail from './Tail'
import '../css/index.css';


class GameContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const board = this.props.board;
        return(
            <div className="game-container">
                <div className="grid-row">
                    <Tail value={board[0][0]} col_end={false}/>
                    <Tail value={board[0][1]} col_end={false}/>
                    <Tail value={board[0][2]} col_end={false}/>
                    <Tail value={board[0][3]} col_end={true}/>
                </div>
                <div className="grid-row">
                    <Tail value={board[1][0]} col_end={false}/>
                    <Tail value={board[1][1]} col_end={false}/>
                    <Tail value={board[1][2]} col_end={false}/>
                    <Tail value={board[1][3]} col_end={true}/>
                </div>
                <div className="grid-row">
                    <Tail value={board[2][0]} col_end={false}/>
                    <Tail value={board[2][1]} col_end={false}/>
                    <Tail value={board[2][2]} col_end={false}/>
                    <Tail value={board[2][3]} col_end={true}/>
                </div>
                <div className="grid-row">
                    <Tail value={board[3][0]} col_end={false}/>
                    <Tail value={board[3][1]} col_end={false}/>
                    <Tail value={board[3][2]} col_end={false}/>
                    <Tail value={board[3][3]} col_end={true}/>
                </div>
            </div>
        );
    }
}

export default GameContainer;



