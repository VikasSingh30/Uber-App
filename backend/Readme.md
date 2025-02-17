# User Registration API

## Endpoint: `/users/register`

### Method: POST

### Description
This endpoint registers a new user. It accepts user details, creates the user in the database, and returns a JSON Web Token (JWT) along with the user information. If the email already exists or if the request validation fails, an error is returned.

### Request Body
The request body must be a JSON object with the following structure:

```json
{
    "fullname": {
        "firstname": "string (required, minimum 3 characters)",
        "lastname": "string (optional, minimum 3 characters if provided)"
    },
    "email": "string (required, valid email format)",
    "password": "string (required, minimum 6 characters)"
}