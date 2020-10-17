import User from '../models/User';
import imagesView from './images_view';

export default {

  check(user: User){
    return {
      username: user.username,
    }
  },

  render(user: User){
    return{
      id: user.id,
      username: user.username,
      email: user.email
    };
  }
}
