# Microservice README

## Communication Contract

### Requesting Data:

To programmatically request data from the microservice, follow these steps:

1. Make an HTTP GET request to the following endpoint:
http://localhost:3000/api/getRandomItem

csharp
Copy code

2. The microservice will respond with a JSON object containing a single randomly selected item from the provided list.

#### Example Call (JavaScript - using fetch):

```javascript
// Make an HTTP GET request to the microservice endpoint
fetch('http://localhost:3000/api/getRandomItem')
.then(response => response.json())
.then(data => {
 console.log('Received Data:', data);
 // Access specific properties of the returned data (e.g., id, name) and use them in your code.
})
.catch(error => console.error('Error:', error));
Receiving Data:
The microservice will respond to your request with a JSON object containing the randomly selected item. The structure of the response will be similar to the following:

json
Copy code
{
  "id": 1,
  "name": "Randomized Item"
}
Feel free to reach out if you have any questions or need further assistance.

