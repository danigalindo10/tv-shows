import { appId, baseUrl } from '../api.js';

const getComments = (itemId) => fetch(`${baseUrl}/${appId}/comments?item_id=${itemId}`)
.then((response) => response.json());


export default getComments;
