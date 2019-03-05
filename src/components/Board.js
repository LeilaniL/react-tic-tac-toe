import React, { Component } from 'react';
import Square from './Square';
import { connect } from 'react-redux';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(i) {
        console.log(i);
        console.log(this.props.squares[i]);
        if (calculateWinner(this.props.squares) || this.props.squares[i]) {
            return;
        }
        if (this.props.squares[i] == null) {
            const { dispatch } = this.props;
            if (this.props.xIsNext) {
                const action = {
                    type: 'MARK_X',
                    index: i
                }
                dispatch(action);
            } else {
                const action = {
                    type: 'MARK_O',
                    index: i
                }
                dispatch(action);
            }
        } else {
            return
        }
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
    console.log(state);
    return {
        squares: state.squares,
        xIsNext: state.xIsNext
    }
}
export default connect(mapStateToProps)(Board);