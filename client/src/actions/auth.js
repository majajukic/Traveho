import {AUTH} from '../const/actionTypes.js';
import * as api from '../api/index.js';

export const signin = (formData, history) => async(dispatch) => {
    try {
        //login the user
        //navigate to the homepage with history
        history.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async(dispatch) => {
    try {
        //signup the user
        //navigate to the homepage with history
        history.push("/");
    } catch (error) {
        console.log(error);
    }
};