import {CONSTS} from "../constants";
import {locations} from "../../data/locations";

export const initialState = {
    shippingList: [],
    locations: locations,
    selectedShippingId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONSTS.SET_SHIPPING_LIST:
            return {
                ...state,
                shippingList: action.payload
            };
        case CONSTS.UPDATE_SHIPPING_ADDRESS:
            const newLocation = state.locations.find(i=>i.id === action.payload.locationId);
            return {
                ...state,
                shippingList: state.shippingList.map(item => {
                    return item.id === action.payload.shippingId ? {
                        ...item,
                        [action.payload.type]:newLocation
                    }: item
                })
            };
        case CONSTS.UPDATE_SELECTED_SHIPPING:
            return {
                ...state,
                selectedShippingId: action.payload
            };
        default:
            return state;
    }
}
