import * as express from 'express'
import * as bodyParser from 'body-parser'
import { json } from 'body-parser';
import App from './app';
import PostsController from './posts/posts.controller';



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CONTROLLER~~~~~~~~~~~~~~~~~~~~~~

const newApp = new App(
    [
      new PostsController(),
    ],
    5000,
  );
newApp.listen()


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MIDDLEWARE~~~~~~~~~~~~~~~~~~~~~
//logger middleware that will log to console what requests were made.
function loggerMiddleware(request:express.Request, response:express.Response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}
//Initialization express app import
const app = express();
//use Middleware
app.use(loggerMiddleware);

const router = express.Router();

//use bodyParser
app.use(bodyParser.json());
//Post method
app.post('/', (request, response) => {
    response.send(request.body);
  });
//Get method - Http request send response to client
app.get('/', (request, response) => {
    response.send({
        hostname: request.hostname,
        path: request.path,
        method: request.method,

    });  
});
//server port listening
app.listen(5000);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ROUTER~~~~~~~~~~~~~~~~~~~~~
router.get('/hello', (request, response) => {
    response.send('Hello World');  
});
//use Router
app.use('/api', router)