export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE'
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        })
    }
};


const initialState = {

}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return {...state}
        case Action.Types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
    }
}


