# Microservice README

## Communication Contract

1. Main communication is through discord, though phone numbers are also exchanged in case we
can’t reach one another online.
2. After the first messages, we must reply within 8 hours. If no reply is made the person sending
the message will reach out by phone.
3. We agree that for our group project, all work must be done 1 day before the deadline to have
room for corrections.
4. We will always be supportive of each other and considerate of the other person’s viewpoint.
We’ll give supportive comments to each other.
5. If the teammate needs help, we will try our best to answer their questions.
6. We will have clear documentation to help the teammate understand our thought process.


### Requesting Data:

To programmatically request data from the microservice, follow these steps:

1. Make an HTTP GET request to the following endpoint:
http://localhost:3000/api/getRandomItem


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

{
  "id": 1,
  "name": "Randomized Item"
}
####


3. UML sequence diagram showing how requesting and receiving data works.
<img width="826" alt="Screenshot 2024-02-26 at 10 07 39 PM" src="https://github.com/dami1025/CS361/assets/107777891/a739c7cc-19b6-4638-8932-38b5dd00b67f">

4. Feel free to reach out if you have any questions or need further assistance.

