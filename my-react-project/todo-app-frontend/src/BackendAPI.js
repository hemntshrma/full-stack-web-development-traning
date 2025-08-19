import axios from 'axios';

const host = "http://localhost:3000";

function callCreateAPI(apiPath, body) {
    return axios.post(host + apiPath, body)
        .then(response => {
            console.log(`got response from CreateAPI ${JSON.stringify(response.data)}`);
            return response.data;
        })
        .catch(error => {
            alert(`api call failed, error: ${error.message}`);
            return null;
        });
}

export { callCreateAPI };