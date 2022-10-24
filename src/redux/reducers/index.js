import {CONSTS} from "../constants";

export const initialState = {
    videos: [],
    savedFrames: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONSTS.GET_VIDEOS:
            return {
                ...state,
                videos: action.payload
            };
        case CONSTS.SAVE_FRAME:
            return {
                ...state,
                savedFrames: [...action.payload, ...state.savedFrames]
            };
        case CONSTS.GET_SAVE_FRAME:
            return {
                ...state,
                savedFrames: action.payload
            };
        default:
            return state;
    }
}
