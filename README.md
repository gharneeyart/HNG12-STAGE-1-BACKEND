# Number Classification API

This project is a Number Classification API built with Node.js and Express. It classifies numbers as prime, perfect, or Armstrong and provides fun facts about numbers.

## Technologies Used
- Node.js 
- Express.js 
- CORS 
- dotenv 
- axios

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/gharneeyart/HNG12-STAGE-1-BACKEND.git 
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
```sh
PORT=3000
NUMBERS_API_URL=http://numbersapi.com
```

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
GET <your-domain.com>/api/classify-number?number=371
```

### Response
- **200 OK**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```

## License

This project is licensed under the MIT License.