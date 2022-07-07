import {createStore, combineReducers} from 'redux';
import empReducers from './reducers/empReducers';
import {composeWithDevTools} from 'redux-devtools-extension'


const mainReducer = combineReducers({
    emp: empReducers
})

const commonData = {
    emp: {
        items:[
            {
                id: 1, empName:'Chandan', email:'cc@gmail.com', phone: 456987126, sales: 5,
            },
            {
                id: 2, empName:'Panda', email:'pp@gmail.com', phone: 856987126, sales: 50
            }
        ]
    },
}


const store = createStore(mainReducer, commonData, composeWithDevTools());


export default store;