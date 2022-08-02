import { appId, baseUrl } from "./api.js";

const getComments = async (id) => {
    const response = await fetch(`${appId}/${baseUrl}/comments?item_id=${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
    });
    if (response.status === 20) {
        return response.json();
    }
    const jsonResponse = await response.json();
    return Promise.reject(jsonResponse)
};

export default getComments;