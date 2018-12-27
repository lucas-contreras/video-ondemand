import axios from "axios";

export const easyEndpoint = "http://test.qbst.com.ar/content.json";
export const hardEndpoint = "http://test.qbst.com.ar/content_hard.json";

export function get(url) {
    return axios.get(url)
        .then(result => {
            const { data } = result;
            
            if (data && data.Success == false) {
                throw data.Error;
            }

            return result.data;
        })
        .then(result => result)
        .catch(error => {
            throw error;
        });
}