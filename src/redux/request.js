import {store} from "./store";

export const requestVideoFiles = async ({
                                            url,
                                            method = "GET",
                                        }) => {
    return [
        {
            id: 'item_1',
            name: 'video1',
            path: `${process.env.PUBLIC_URL}/assets/videos/video1.mp4`
        }, {
            id: 'item_2',
            name: 'video2',
            path: `${process.env.PUBLIC_URL}/assets/videos/video2.mp4`
        }
    ]
};

export const requestFramesFiles = async ({
                                             url,
                                             method = "GET",
                                             time_in_video,
                                             file_name
                                         }) => {
    const framesList = []
    const startIndex = 1
    for (let i = startIndex; i <= time_in_video - 1; i++) {
        framesList.push({
            path: `${process.env.PUBLIC_URL}/assets/frames/${file_name}/img${i}.jpg`,
            file_name,
            frame_number: i,
            id: file_name + '_img_' + i
        })
    }
    return {
        first_frame: startIndex,
        frame_count: framesList.length,
        frames: framesList
    }
};

export const requestSaveFrame = async ({url, method, data}) => {
    return data
};

export const requestSaveFrames = async ({url, method = 'GET'}) => {
    return store.getState()?.savedFrames
};
