const INITIAL_STATE = {
    userEmail: '',
    loggedUser: false,
};

const reduceUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, loggedUser: true, userEmail: action.userEmail }

        case 'LOG_OUT':
            return { ...state, loggedUser: false, userEmail: "" }

        default:
            return state;
    }
}

export default reduceUser;