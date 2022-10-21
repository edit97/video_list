import {CONSTS} from "../constants";
import {shippingList} from "../../data/shippingList";

export const GetShippingData = () => {
    // api call imitation
    return dispatch => {
        return new Promise(resolve => {
            const randomReqTime = Math.floor(Math.random() * 300 + 700); // [700 - 1000]
            setTimeout(() => {
                dispatch({
                    type: CONSTS.SET_SHIPPING_LIST,
                    payload: shippingList
                });
                resolve()
            }, randomReqTime)
        })

    };
};

export const UpdateShippingAddress = (shippingId, locationId, type) => {
    return dispatch => {
        return dispatch({
            type: CONSTS.UPDATE_SHIPPING_ADDRESS,
            payload: { locationId, shippingId, type }
        })
    };
};

export const UpdateSelectedShipping = (locationId) => {
    return dispatch => {
        return dispatch({
            type: CONSTS.UPDATE_SELECTED_SHIPPING,
            payload: locationId
        })
    };
};
