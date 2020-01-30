const initialState = {
    page: "home"
}

export default function pageInfo (state = initialState,  action) {
    switch (action.type) {
        case "SET_PAGE":
            return {...state, page: action.payload}
        default:
            return state
    }
}