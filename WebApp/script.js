const API_URL = 'https://cc91nvtfe2.execute-api.us-east-1.amazonaws.com/dev/technology/vscodedeck';

document.getElementById('fetchDataButton').addEventListener('click', async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        document.getElementById('apiResponse').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching technology:', error);
        document.getElementById('apiResponse').textContent = 'Error fetching data!';
    }
});
