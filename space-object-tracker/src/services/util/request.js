const request = async (method, url, data) => {
    try {
        let headers = {};
        let currentRequest;
        
        const user = localStorage.getItem('user');
        const auth = JSON.parse(user || '{}');

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        if (method === 'GET') {
            currentRequest = fetch(url, { headers });
        } else {
            currentRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            });
        }
        const res = await currentRequest;
        const result = await res.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');