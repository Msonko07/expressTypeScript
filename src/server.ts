import * as express from 'express'
import * as bodyParser from 'body-parser'
import { json } from 'body-parser';

//logger middleware that will log to console what requests were made.
function loggerMiddleware(request:express.Request, response:express.Response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}

//Initialization express app import
const app = express();

const router = express.Router();

//use Middleware
app.use(loggerMiddleware);
//use bodyParser
app.use(bodyParser.json());

//Http request send response to client
app.get('/', (request, response) => {
    response.send('Hello World ! Msonko07');  
})

//server port listening
app.listen(5000);

//use Router
app.use('/api', router)

//Router
router.get('/', (request, response) => {
    response.send('Hello World');  
})