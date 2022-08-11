const request = async (method, url, data) => {
    try {

        let currentRequest;

        if (method === 'GET') {
            currentRequest = fetch(url);
        } else {
            currentRequest = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            });
        }
        const res = await currentRequest;

        console.log(res);

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