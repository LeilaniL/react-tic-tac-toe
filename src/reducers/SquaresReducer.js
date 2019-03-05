export default (state = { squares: Array(9).fill(null), xIsNext: true }, action) => {
    let newState;
    let newSquares = state.squares;
    const { index } = action;

    switch (action.type) {
        case 'MARK_X':
            console.log('MARK X called' + index);
            newSquares[index] = 'X';
            newState = Object.assign({}, state, {
                newSquares,
                xIsNext: false
            });
            console.log(newState);
            return newState;
        case 'MARK_O':
            console.log('Mark O' + index);
            newSquares[index] = 'O';
            newState = Object.assign({}, state, {
                newSquares,
                xIsNext: true
            });
            return newState;
        default:
            return state;
    }
};