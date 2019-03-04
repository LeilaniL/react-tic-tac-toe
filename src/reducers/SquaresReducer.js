export default (state = { squares: Array(9).fill(null) }, action) => {
    console.log('SquaresReducer and state: ' + state.squares);
    return state;
};