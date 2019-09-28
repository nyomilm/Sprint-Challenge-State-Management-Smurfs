import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });

    axios
    .get('http://localhost:3333')
    .then(res => {
        dispatch({
            type: FETCH_SMURFS_SUCCESS,
            payload: res.data
        });
    })
    .catch(() =>{
        dispatch({
            type: FETCH_SMURFS_FAIL
        });
    });
};

export const createSmurfs = () => dispatch => {};