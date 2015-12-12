var initialState = require('./../initial-state');

var Challenge1Reducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'POINTS_INC':
            newState.currentValue += 1;
            console.log(newState.currentValue);
            return newState;
        case 'POINTS_DEC':
            newState.currentValue -= 1;
            return newState;
        default:
            return state || initialState().points;
    }
};

module.exports = Challenge1Reducer;