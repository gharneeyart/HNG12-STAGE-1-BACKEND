# Number Classification API

This project is a Number Classification API built with Node.js and Express. It classifies numbers as prime, perfect, or Armstrong and provides fun facts about numbers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/number-classification-api.git
   ```

2. Navigate to the project directory:
   ```
   cd number-classification-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add any necessary environment variables.

## Usage

To start the server, run:
```
npm start
```
The server will run on `http://localhost:3000`.

## API Endpoints

### GET /api/classify-number

This endpoint classifies a number and returns its classification along with a fun fact.

**Query Parameters:**
- `number`: The number to classify (required).

**Response:**
- Returns a JSON object with the classification and fun fact.

## Examples

### Request
```
GET /api/classify-number?number=7
```

### Response
```json
{
  "number": 7,
  "classification": {
    "isPrime": true,
    "isPerfect": false,
    "isArmstrong": false
  },
  "funFact": "7 is a prime number."
}
```

## License

This project is licensed under the MIT License.