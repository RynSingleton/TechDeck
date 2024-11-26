// Replace with your actual API Gateway URL
const API_URL = 'https://cc91nvtfe2.execute-api.us-east-1.amazonaws.com/dev/technology/{id}';

// Select the button and response container
const fetchDataButton = document.getElementById('fetchDataButton');
const apiResponseDiv = document.getElementById('apiResponse');

// Add click event listener to the button
fetchDataButton.addEventListener('click', () => {
    const technologyId = 'vscodedeck';
    const endpoint = API_URL.replace('{id}', technologyId);

    const fetchTechnology = async (id) => {
      try {
        const response = await fetch(`https://cc91nvtfe2.execute-api.us-east-1.amazonaws.com/dev/technology/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const data = await response.json();
        console.log(data);
        return data;
      } catch (err) {
        console.error("Error fetching technology:", err);
      }
    };
});
