# TechDeck

**TechDeck** is a web application designed to provide technology lookup services based on user input. Users can search for technologies by various IDs and receive detailed information about them, including data from different AWS services like DynamoDB and S3. This project is built using **React** for the front-end, **Node.js** for the back-end, **AWS Lambda**, **API Gateway**, and **DynamoDB** for the cloud services.

## Features

- Search for technology data based on IDs.
- Fetch data from DynamoDB and S3.
- Integrated with AWS Lambda for API logic.
- Basic, responsive UI built with HTML, CSS, and JavaScript.

## Architecture

**Frontend**:  
- React for building dynamic, single-page applications.  
- HTML and CSS for basic styling and structure.  
- JavaScript for calling the API and displaying results.

**Backend**:  
- **AWS Lambda** for handling business logic and API responses.  
- **API Gateway** to expose the Lambda function via RESTful endpoints.  
- **DynamoDB** for storing technology data.  
- **S3** for storing and serving metadata related to technologies.

## Setup Instructions

### Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [AWS CLI](https://aws.amazon.com/cli/) (for local setup and deployment)
- [npm](https://www.npmjs.com/) (to install dependencies)

### Frontend Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/techdeck.git
cd techdeck
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Visit http://localhost:3000 in your browser.

Backend Setup (AWS Lambda & API Gateway)
Deploy Lambda Function:

Write your Lambda code in the lambda directory.
Create a Lambda function in the AWS Management Console.
Set up API Gateway to trigger the Lambda function with the required API endpoints.
Enable CORS in API Gateway to allow your frontend to access the API.
Set up DynamoDB:

Create a DynamoDB table (e.g., IDE).
Add the relevant data for your technologies.
Ensure the partition key is correctly set (e.g., ideFlavor).
Configure S3:

Set up an S3 bucket (e.g., techdeck-bucket).
Store technology-related metadata in files (e.g., vscodedeck/metadata.txt).
Environment Variables
Ensure that the following environment variables are set in your AWS Lambda configuration (or locally for testing):

DYNAMODB_TABLE_NAME: Your DynamoDB table name.
S3_BUCKET_NAME: Your S3 bucket name.
Testing
Test the Lambda function in the AWS Console with a sample event:

For example, for the technology ID vscodedeck, test with a sample event in API Gateway or directly in Lambda.
The frontend will display data fetched from the Lambda function, which in turn fetches from DynamoDB and S3.

API Endpoints
GET /technology/{id}
Fetches information about the technology with the given id. This includes data from both DynamoDB and S3.

Example Response:
json
Copy code
{
  "technology_id": "vscodedeck",
  "s3_data": {
    "text_data": "testdatatest"
  }
}
Troubleshooting
CORS Issues: If you're encountering CORS-related issues when accessing the API from your frontend, ensure that CORS is correctly configured in API Gateway.
Missing Data: If DynamoDB or S3 data is missing for a specific technology ID, verify that the data exists in the respective service.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

For any further questions, please reach out or create an issue in the GitHub repository.