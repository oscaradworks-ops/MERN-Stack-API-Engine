# Blog Engine API (MEN Stack)

## Project Overview

This is a RESTful API built using the **MEN stack** (MongoDB, Express, Node.js) designed to manage content for a simple blog engine. It provides full **CRUD** (Create, Read, Update, Delete) functionality for **Article** resources.

The project demonstrates core backend development concepts, including:
* Establishing a secure connection to MongoDB Atlas using Mongoose.
* Defining data schemas with validation (Mongoose Models).
* Implementing clean, modular routing with Express Router.

## 🚀 Technologies Used

| Technology | Role |
| :--- | :--- |
| **Node.js** | JavaScript Runtime Environment |
| **Express** | Web application framework for routing and middleware |
| **MongoDB** | NoSQL Database (used via MongoDB Atlas) |
| **Mongoose** | Object Data Modeling (ODM) library for MongoDB and Node.js |
| **dotenv** | Management of environment variables (.env file) |
| **nodemon** | Development tool for automatic server restarts |

## 🛠️ Setup and Installation

Follow these steps to get the API running locally on your machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js)
* A MongoDB Atlas account and Cluster URI.

### 1. Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/blog-engine-api.git](https://github.com/YOUR_USERNAME/blog-engine-api.git)
cd blog-engine-api

npm install

# .env file
PORT=3000
MONGODB_URI="mongodb+srv://<YOUR_ATLAS_USER>:<YOUR_ATLAS_PASSWORD>@yourcluster.mongodb.net/BlogDB?retryWrites=true&w=majority"

npm run dev
```

📌 API EndpointsThe API is fully functional for managing articles. 
| Method | Endpoint | Description| Status Codes
| :--- | :--- | :--- | :--- |
| POST | /api/articles | Creates a new article. | 201 (Created) 400 (Bad Request) |
| GET | /api/articles | Retrieves all articles sorted by creation date. | 200 (OK)|
| GET | /api/articles/ | :id Retrieves a single article by its MongoDB ID. | 200 (OK), 404 (Not Found)|
| PUT | /api/articles/ | :id Updates an existing article with new data. | 200 (OK), 404 (Not Found), 400 (Validation Error)|
| DELETE | /api/articles/ | :id,Deletes a specified article. | 200 (OK), 404 (Not Found) |

---------------------------------------------------------------------------------------------------------
Example Request Body (POST / PUT)
{
    "title": "A Guide to API Development",
    "content": "This covers the basics of setting up routes and models.",
    "tags": ["Node", "Express"],
    "status": "Published"
}
---------------------------------------------------------------------------------------------------------

## 📂 File Structure
The project follows a modular structure to separate concerns (routes, models, database connection):
```
/blog-engine-api
├── node_modules/
├── .env
├── package.json
├── server.js               # Main application entry
├── /db
│   └── connection.js       # Database connection logic
├── /models
│   └── Article.js          # Mongoose Schema definition
└── /routes
```




## Some learning in this project----> ##




✔️ server.js file was trying to execute the data base before the variables of the env load the proccess
-----------------------------------------

 ✅ Solution = reorder the dotenv code line:
 require('dotenv').config(); (This line should be the first onee in the "server.js" file)
 (this had to be the very first line in the code)
-----------------------------------------

✔️ Make sure the file .env is writed ✅"MONGODB_URI" instead "MONGODB_URL"
------------------------------------------

✔️ Other 
MongoDB connection failed: bad auth : authentication failed
[nodemon] app crashed - waiting for file changes before starting...

this was for a problem in the database "user pasword"needed to be updated and repaced in the .env file... 
RESULT:
PORT=3000
MONGODB_URI=mongodb+srv://webartistdesign_db_user:*NewPasswordHere*@oscardb.uhazsl9.mongodb.net/


--------------------------------------------------
✔️ Other 
Postman had troubles Posting my json file because the actual IP adress needed to be Update in mongo db atlas 
under / Security/Data Base and Network Acess/ IP Access List
Issue solved ✅ We got the post! (I think it was my antivirus VPN)

** Nodemon acualize the changes in the .js files automatically so that was a big help **
** Using MongoDB for VS Code extention for vscode was helpfull too **






