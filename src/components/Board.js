import React, { Component } from 'react';
import Square from './Square';
import { connect } from 'react-redux';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(i) {
        console.log('I' + i);
        const { dispatch } = this.props;
        console.log('handleClick props.squares: ' + this.props.squares.squares);
        console.log('handleClick xIsNext: ' + this.props.xIsNext.xIsNext);
        const newSquares = [...this.props.squares.squares];
        // if (calculateWinner(newSquares) || newSquares[i]) {
        //     console.log('you win!');
        //     return;
        // }
        if (this.props.xIsNext.xIsNext) {
            const action = {
                type: 'MARK_X',
                index: i
            }
            console.log('xIsNext was true');
            dispatch(action);
        }
        newSquares[i] = this.props.xIsNext ? 'X' : 'O';
        // this.setState({
        //     // squares: squares,
        //     xIsNext: !this.props.xIsNext,
        // });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.props.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        // else {
        //     // status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const mapStateToProps = state => {
    return {
        squares: state.squares,
        xIsNext: state.xIsNext
    }
}
export default connect(mapStateToProps)(Board);