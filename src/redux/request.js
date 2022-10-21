import axios from "axios";
import {store} from "../store";
import {history} from "../../configs/history";
import {UTIL_CONSTS} from "../constants";
import {RefreshToken} from "../actions";

export const request = ({
                            url,
                            method = "GET",
                            data = null,
                            token = false,
                            customHeaders = null,
                            languageFlag = false,
                            newToken = null
                        }) => {
    const accessToken = newToken;
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };
    customHeaders && (headers = {...headers, ...customHeaders});
    token && accessToken && (headers["x-access-token"] = accessToken);
    let language = store.getState()?.general?.selectedLanguage;
    //console.log(language)
    if (languageFlag) {
        headers["Accept-Language"] = language?.code ?? 'en'
    }
    const requestData = {
        url: url,
        method: method,
        headers: headers,
    };

    data && (requestData.data = data);

    return axios.request(requestData)
};

// log user out when token expires

axios.interceptors.response.use(response => response, error => {
        // const originalRequest = error.config;
        store.dispatch({
            type: UTIL_CONSTS.END_LOADING
        });
        return Promise.reject(error);
    }
);
