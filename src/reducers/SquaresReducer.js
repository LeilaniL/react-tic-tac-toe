export default (state = { squares: Array(9).fill('null') }, action) => {
    let newState;
    let newSquares;
    const { index } = action;

    switch (action.type) {
        case 'MARK_X':
            console.log('MARK X called');
            newSquares = state.squares.slice();
            console.log('NewSquares: ' + newSquares);
            newState = Object.assign({}, state, {
                [index]: 'X'
            });
            console.log(newState);
            return newState;
        default:
            return state;
    }
};