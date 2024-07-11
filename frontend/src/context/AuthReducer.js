const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                isFetching : true,
                user: null,
                error: false,
                logout: null
            };

        case "LOGIN_SUCCESS":
            return {
                isFetching : false,
                user: action.payload,
                error: false,
                logout: null
            };

        case "LOGIN_FAILURE":
            return {
                isFetching : false,
                user: null,
                error: action.payload,
                logout: null
            };

        case "LOGOUT":
            return {
                isFetching : false,
                user: null,
                error: false,
                logout: action.payload
            };
        default:
            return state;
    };
}
export default AuthReducer;