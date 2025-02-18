# todo-express
# ToDo API (Express.js)
This project is a simple REST API server for managing a to-do list, built using Express.js.
The server supports the main HTTP methods: GET, POST, PUT, and DELETE.

 ### Features:
- GET /todos — Retrieve the list of all tasks.
- POST /todos — Add a new task to the list.
- PUT /todos/:id — Update an existing task by id.
- DELETE /todos/:id — Delete a task by id.

## Installation and Setup
1. Clone the repository:
git clone https://github.com/your-repo/todo-api.git
cd todo-api
2. Install dependencies:
npm install
3. Start the server:

node server.js
(By default, the server runs on port 3000.)

## functions
1.  Get all tasks
GET /todos
Response:

[
  { "id": 1, "task": "Buy milk", "completed": false },
  { "id": 2, "task": "Call a friend", "completed": true }
]
2.  Add a new task
POST /todos
Request Body (JSON):

{
  "task": "Read a book"
}
3. Response:
{ "id": 3, "task": "Read a book", "completed": false }

4. Update a task by ID
PUT /todos/:id
Request Body (JSON):
{
  "task": "Read two books",
  "completed": true
}
5. Response:

{ "id": 3, "task": "Read two books", "completed": true }

6. Delete a task by ID
DELETE /todos/:id
Response:

{ "message": "Task deleted" }
## Technologies:
Node.js
Express.js
