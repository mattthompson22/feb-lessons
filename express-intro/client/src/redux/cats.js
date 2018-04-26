import axios from "axios";

const initialCatState = {
    data: [],
    loading: true,
    errMsg: ""
}

const catReducer = (state = initialCatState, action) => {
    switch (action.type) {
        case "GET_CATS": {
            return {
                ...state,
                loading: false,
                data: action.cats
            }
        }
        default:
            return state;
    }
}

export const getCats = () => {
    return dispatch => {
        axios.get("/cats")
            .then(response =>{
                dispatch({
                    type: "GET_CATS",
                    cats: response.data
                });
            })
            .catch(err =>{
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                });
            });
    }
}







export default catReducer;
