import { combineReducers, Reducer, Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../screens/reduxTest/testSlice'

const rootReducer: Reducer = combineReducers({

})

const store : Store = configureStore({
    reducer: {
        test : testReducer
    }
})

export default store

