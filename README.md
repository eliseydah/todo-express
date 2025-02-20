# todo-express

This project is a simple REST API server for managing various API, built using Express.js.

## Installation and Setup
1. Clone the repository:
```
git clone https://github.com/your-repo/todo-api.git
cd todo-api
```
2. Install dependencies:
```
npm install
```
3. Start the server:
```
npm start
```
(By default, the server runs on port 3000.)


## ToDo API (Express.js)
The server supports the main HTTP methods: GET, POST, PUT, and DELETE.

 ### Features:
- GET /todos — Retrieve the list of all tasks.
- POST /todos — Add a new task to the list.
- PUT /todos/:id — Update an existing task by id.
- DELETE /todos/:id — Delete a task by id.


### Examples
1.  Get all tasks
`GET /todos`
Response:
```
[
  { "id": 1, "task": "Buy milk", "completed": false },
  { "id": 2, "task": "Call a friend", "completed": true }
]
```

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

## Wishlist API  (Express.js)

The server supports the main HTTP methods: GET, POST, and DELETE.

 ### Features:
- GET /wishes — Retrieve the list of all wishes.
- POST /wishes — Add a new wish to the list.
- DELETE /wishes/:id — Delete a wish by id.


### Examples
1.  Get all tasks
`GET /wishes`
Response:
```
 [{
        "id": 1,
        "description": "description",
        "title": "Test wishes!",
        "link": "link",
        "category": ""
    }]
```

2.  Add a new wish
`POST /wishes`
Request Body (JSON):
 {
        "description": "New description",
        "title": "Test new wishes!",
        "link": "New link",
        "category": "category 1"
    }

 Response:
{ "id": 2, 
        "description": "New description",
        "title": "Test new wishes!",
        "link": "New link",
        "category": "category 1" }


3. Delete a task by ID
`DELETE /wishes/:id`
Response:
{ "message": "Wish deleted" }

## Technologies:
Node.js
Express.js
