import * as express from 'express';
import Post from './posts.interface';
 
class PostsController {
  public path = '/posts';
  public router = express.Router();
 
  private posts: Post[] = [
    {
      author: 'Mouhamed',
      content: 'My Express App',
      title: 'Full Stack Developer',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  }
}
 
export default PostsController;