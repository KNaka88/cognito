import axios from 'axios';
import { FETCH_USER } from './types';

export const login = (values) => async (dispatch) => {
    console.log(values);
    //const res = await axios.post('api/auth/login', values);
    //dispatch({ type: FETCH_USER, payload: res.data});
};