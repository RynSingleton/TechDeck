// Replace with your actual API Gateway URL
const API_URL = 'https://cc91nvtfe2.execute-api.us-east-1.amazonaws.com/dev/technology/{id}';

// Select the button and response container
const fetchDataButton = document.getElementById('fetchDataButton');
const apiResponseDiv = document.getElementById('apiResponse');

// Add click event listener to the button
fetchDataButton.addEventListener('click', () => {
    const technologyId = 'vscodedeck';
    const endpoint = API_URL.replace('{id}', technologyId);

    // Fetch data from the API
    fetch('https://cc91nvtfe2.execute-api.us-east-1.amazonaws.com/dev/technology/vscodedeck')
        .then(response => {
            if (!response.ok) {
                throw new Error(`API returned status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display the response data on the page
            apiResponseDiv.innerHTML = `
                <h3>API Response:</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
        })
        .catch(error => {
            // Handle and display errors
            apiResponseDiv.innerHTML = `
                <h3>Error:</h3>
                <pre>${error.message}</pre>
            `;
        });
});
