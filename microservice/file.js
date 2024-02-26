const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());

// Endpoint to get a randomized item

// Endpoint for the root path
app.get('/', (req, res) => {
    res.send('Hello, this is your microservice!');
});

// Endpoint to get a randomized item
app.get('/api/getRandomItem', async (req, res) => {
    try {
        // Fetch data dynamically from GitHub repository
        const filePath = 'microservice/data.json';  // Adjust the path as needed
        const rawData = await fetchDataFromGitHub(filePath);


        // Parse the JSON data
        const data = JSON.parse(rawData);

        // Ensure data is an array
        if (!Array.isArray(data)) {
            throw new Error('Data is not an array.');
        }

        // Select a random item from the fetched data
        const randomElement = data[Math.floor(Math.random() * data.length)];

        res.json(randomElement);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message }); // Send the detailed error message
    }
});


// Function to fetch data from GitHub repository
async function fetchDataFromGitHub(filePath) {
    const owner = 'dami1025';
    const repo = 'CS361';
    const branch = 'main';  // Adjust the branch as needed
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;

    const response = await fetch(rawUrl);
    try {
        const response = await fetch(rawUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from GitHub. Status: ${response.status}`);
        }

        const rawData = await response.text();
        return rawData;
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }

    if (!response.ok) {
        throw new Error(`Failed to fetch data from GitHub. Status: ${response.status}`);
    }

    const rawData = await response.text();
    return rawData;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
