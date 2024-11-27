
import { createStore } from 'redux';
const useReducer = (state = {data : {}} , action) => {
    switch(action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(useReducer)

export default store