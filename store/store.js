import {createStore,combineReducers,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {message} from 'antd'
import axios from 'axios'
import { composeWithDevTools } from 'redux-devtools-extension'

const LOGOUT = 'logout'
const userInitialState = {}

function userReducer(state = userInitialState, action) {
    switch(action.type) {
        case LOGOUT:
            return {}
        default:
            return state
    }
}

const allReduceers = combineReducers({
    user:userReducer
})

export function logout() {
    return (dispatch) => {
        axios.post('/logout').then(resp => {
            if(resp.status === 200) {
                dispatch({type:LOGOUT})
                message.success("注销成功")
            } else {
                message.error("注销失败")
                console.error('logout failed = ',resp)
            }
        })
    }
}

export default function initializeStore(state) {
    const store = createStore(
        allReduceers,
        {... userInitialState, ...state},
        composeWithDevTools(applyMiddleware(ReduxThunk))
    )
    return store
}