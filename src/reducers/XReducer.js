export default (state = { xIsNext: true }, action) => {
    console.log('XReducer and state: ' + state.xIsNext);
    return state;
};