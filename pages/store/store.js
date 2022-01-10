import { createStore,applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk'

const initialState = {
    count:1
}
const userInitialState = {
    name:"Evan",
    age:20
}
const ADD = "ADD"
function add(num) {
    return {
        type:ADD,
        num
    }
}
function addAsync(num) {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(add(num))
        },1000)
    }
}

function counterReducer(state = initialState,action) {
    switch(action.type) {
        case Add:
            return {
                count:state.count+1
            }
            default:
                return state;
    }
}
const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state = userInitialState,action) {
    switch(action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                name:action.name
            }
            default:
                return state;
    }
}

const allReducers = combineReducers({
    couter:counterReducer,
    user:userReducer
})

// 确保每一次创建的都是新的
export default function initializStore(state) {
    const store = createStore(
        allReducers,
        Object.assign({},{
            counter:initialState,
            user:userInitialState,
        },
        state
        ),
        
        composeWithDevTools(applyMiddleware(ReduxThunk))
    )
    return store;
}