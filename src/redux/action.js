import { ADD_USER, DELETE_USER, UPDATE_USER, USER_USER} from './actionType';

export const empRegister = (data) =>{
    return{
        type: ADD_USER,
        payload: data
    }
}


export const deleteUser = (id) =>{
    return{
        type: DELETE_USER,
        payload: id
    }
}

export const userInfo = (id) =>{
    return {
        type: USER_USER,
        payload: id
    }
}

export const updateUser = (data) => {
    return {
        type: UPDATE_USER,
        payload: data
    }
}