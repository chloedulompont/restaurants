const http = require('http');
const dotenv = require('dotenv');
const {MongoClient} = require('mongodb')


const port = 4200;

dotenv.config();

const app = require('./app');
const server = http.createServer(app)


function startServer(){
    // Démarrage de l'application Node.js
    server.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
}

startServer()