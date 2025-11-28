
# Contact Manager App — Backend

A clean, production‑oriented backend for the Contact Manager App built using **Node.js**, **Express**, and **MongoDB / Mongoose**. Provides secure user authentication and full CRUD support for contact data.

## Features

* **Contact CRUD API** — Create, Read, Update, Delete contacts tied to authenticated users.
* **Clean Project Structure** — Organized using controllers, models, routes, and middleware for maintainability and scalability.
* **Middleware & Config Management** — Centralized configuration for environment variables, constants, error handling, auth flow, etc.
* **RESTful API Design** — Consistent HTTP methods and status codes, well-structured endpoints.

## Tech Stack

* **Node.js** — Server runtime.
* **Express.js** — Web framework / API server.
* **MongoDB + Mongoose** — Database and object modelling.
* **dotenv / config** — Environment-based configuration for secrets and database connection.

## Project Structure

```
config/          # Configuration (e.g. DB connection, constants)
controllers/     # Logic for handling requests & responses
middleware/      # Authentication, error handling, etc.
models/          # Mongoose schemas / data models
routes/          # API route definitions
server.js        # Entry point — sets up Express server & middleware
package.json     # Project metadata and dependencies
```

## Getting Started (Local Setup)

1. Clone the repository

   ```bash
   git clone https://github.com/saad9797/Contact-Manager-App.git
   cd Contact-Manager-App
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in root (or `config/`) and set environment variables, for example:

   ```
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   PORT=5000
   ```

4. Start the server

   ```bash
   npm start
   ```

   The backend server should now run on the designated port (e.g. `localhost:5000`).

## API Endpoints Overview

| Method | Endpoint             | Description                                  |
| ------ | -------------------- | -------------------------------------------- |
| POST   | `/api/auth/register` | Register a new user                          |
| POST   | `/api/auth/login`    | Login + receive JWT token                    |
| GET    | `/api/contacts`      | Retrieve list of contacts for logged‑in user |
| POST   | `/api/contacts`      | Create a new contact                         |
| GET    | `/api/contacts/:id`  | Retrieve a specific contact by ID            |
| PUT    | `/api/contacts/:id`  | Update a contact by ID                       |
| DELETE | `/api/contacts/:id`  | Delete a contact by ID                       |

