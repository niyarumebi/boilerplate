import axios from 'axios';
import {navigate} from "./HistoryHelper";

const ENUM = {
    // method
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    // content-type
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',

    // baseUrl
    BASE_API_URL: process.env.REACT_APP_ENV === 'production' ? process.env.REACT_APP_PRD_API_URL : process.env.REACT_APP_DEV_API_URL
};

const request = async (method, contentType, url, data) => {
    const axiosInstance = axios.create({
        baseURL: ENUM.BASE_API_URL,
        timeout: 7000,
        headers: {
            'Accept': contentType,
            'Content-Type': contentType
        }
    })

    try {
        let axiosConfig = {};
        if (method === ENUM.GET) {
            axiosConfig = {
                method: method,
                url
            }
        } else {
            axiosConfig = {
                method: method,
                url,
                data
            }
        }
        const result = await axiosInstance(axiosConfig);
        console.log('@@ [response]', result);

        return result;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 404) {
                console.log('@@ [error]', e.response.data);
                navigate('/error/404');
            }
        }
        console.log("error server call: ", url, ", reason: ", e);
    }
};

const FetchHelper = {
    fetchGetJson: (url) => {
        return request(ENUM.GET, ENUM.APPLICATION_JSON, url)
    },
    fetchPostJson: (url, data) => {
        return request(ENUM.POST, ENUM.APPLICATION_JSON, url, data);
    },
    fetchPutJson: (url, data) => {
        return request(ENUM.PUT, ENUM.APPLICATION_JSON, url, data);
    },
    fetchDeleteJson: (url, data) => {
        return request(ENUM.DELETE, ENUM.APPLICATION_JSON, url, data);
    },
    fetchMultipartFormData: async (url, data) => {
        const result = await axios.create({
            baseURL: ENUM.BASE_API_URL,
            timeout: 7000,
            headers: {'Content-Type': ENUM.MULTIPART_FORM_DATA},
            method: ENUM.POST,
            url,
            data
        });

        let formData = new FormData();

        // yet
    }
}

export default FetchHelper;