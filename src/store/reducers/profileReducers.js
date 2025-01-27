import { SocialAPI } from "../../api/api"

const GET_PROFILE = 'GET_PROFILE'

const initState = {
    profile: null
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE :
            return {
                ...state,
                profile : action.payload
            }
        default:
            return state
    }
}

const getProfileAC = (profile) => ({type : GET_PROFILE, payload : profile})

export const getProfileThunk = (id) => {
    return (dispatch) => {
        SocialAPI.getUserProfile(id)
            .then((res) => {
                dispatch(getProfileAC(res.data))
            })
    }
}

export default profileReducer