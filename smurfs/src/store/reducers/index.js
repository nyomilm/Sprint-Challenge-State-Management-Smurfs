const initialState = {
    isfetching: false,
    error: false,
    smurfs: {
        name: '',
        age: null,
        height: '',
        id: null
    }
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;