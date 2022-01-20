# Web server that exposes a single endpoint. This endpoint returns job for job id from mongo db 

# MONGO db Setup

1. create a database: developdiverse
2. create a collection: jobs
3. import following json to your collection -> db/jobs.json

# Backend Setup

1. update .env with MONGO_URI
2. install dependencies with `npm i`
3. run with `npm start`
4. the server will start on port 3000
5. make an api call http://localhost:3000/api/jobs/{id} where id is jobId

## Description 

The lambda/nodejs server runs in clusters 

- [x] src
     - [x] controller
         - [x] The job controller handles requests 
     - [x] service
         - [x] The service is kept different from controller as in future further complications like filtering can be added 
     - [x] database
         - [x] contains schema

# Frontend Setup

1. install dependencies with `npm i`
2. update BASE_URL with backend api url in src/constants/api-request
3. run with `npm run serve`
4. the server will start on port 8080
