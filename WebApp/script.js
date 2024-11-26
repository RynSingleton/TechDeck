// Replace with your actual API Gateway URL
const API_URL = 'https://your-api-id.execute-api.your-region.amazonaws.com/GET/technology/vscodedeck';

// Select the button and response container
const fetchDataButton = document.getElementById('fetchDataButton');
const apiResponseDiv = document.getElementById('apiResponse');

// Add click event listener to the button
fetchDataButton.addEventListener('click', () => {
    // Example: Replace {id} with a specific technology ID
    const technologyId = 'example-tech-id';
    const endpoint = API_URL.replace('{id}', technologyId);

    // Fetch data from the API
    fetch(endpoint)
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
