import { ADD_USER } from "../actionType";

const empReducers = (state='', action) =>{
    //console.log('gggg')
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                items:[...state.items,action.payload]
            }
            case "DELETE_USER":
            return {
                ...state,
                items: state.items.filter((user) => user.id != action.payload)
            }
            default:
            return state
    }
}

export default empReducers;