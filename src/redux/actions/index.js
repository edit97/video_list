import {CONSTS} from "../constants";
import {requestFramesFiles, requestSaveFrame, requestSaveFrames, requestVideoFiles} from "../request";

export const GetVideos = () => {
    const requestData = {
        url: `/videofiles`,
        method: "GET",
    };

    return dispatch => {
        return requestVideoFiles(requestData)
            .then((res) => {
                res && dispatch({
                    type: CONSTS.GET_VIDEOS,
                    payload: res
                })
            })
    };
};

export const GetFrames = (file_name, time_in_video) => {
    const requestData = {
        url: `/videofiles/${file_name}/frames/${time_in_video}`,
        method: "GET",
        file_name,
        time_in_video,
    };

    return dispatch => {
        return requestFramesFiles(requestData)
            .then((res) => {
                return res;
            })
    };
};

export const SaveFrames = (data) => {
    const requestData = {
        url: `saved_frames/new_frame`,
        method: "POST",
        data,
    };

    return dispatch => {
        return requestSaveFrame(requestData)
            .then((res) => {
                res && dispatch({
                    type: CONSTS.SAVE_FRAME,
                    payload: res
                })
            })
    };
};

export const GetSaveFrames = (data) => {
    const requestData = {
        url: `saved_frames`,
        method: "POST",
        data,
    };

    return dispatch => {
        return requestSaveFrames(requestData)
            .then((res) => {
                res && dispatch({
                    type: CONSTS.GET_SAVE_FRAME,
                    payload: res
                })
            })
    };
};
