export const makeApiRequest = async (_url, _method, _data) => {
	try {

		const options = {
			method: _method,
			headers: {
				'Content-Type': 'application/json',
			},
		};

		if (_method !== 'GET' && _method !== 'HEAD') {
			options.body = JSON.stringify(_data);
		}

		const response = await fetch(_url, options);

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error('API request failed');
		}
		return responseData;
	} catch (error) {
		// Handle error
		throw new Error(`API request failed: ${error.message}`);
	}
};