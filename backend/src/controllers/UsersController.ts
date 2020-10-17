import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import userView from '../views/user_view';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

export default {

  // create new user
  async create(request: Request, response: Response){

    const userRepository = getRepository(User);

    // grab data from http request
    // console.log(request.body)
    const {
      username,
      email,
      password
    } = request.body;

    // check if username exists
    const usernameExists = await userRepository.find({where: {username: username}});
    // console.log(usernameExists);
    usernameExists.forEach(element => {
      if (element.id) {
        return response.json({ 
          newUser: false, 
          message: 'username is being use'
        });
      } 
    });

    // secure user password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const data = {
      username : String(username),
      email : String(email),
      password : String(hashPassword)
    }
    // console.log({data});

    const user = userRepository.create(data);
    await userRepository.save(user);
    return response.status(201).json({
      newUser: true,
      message : 'new user aded with success'
    });

  },

  // show user
  async show(request: Request, response: Response){
    const { username, password } = request.body;

    const userRepository = getRepository(User);

    const user = await userRepository.find({where: {username: username}});

    let id = 0;
    let hash ='';
    let email = '';
    user.forEach(element => { 
      // console.log(typeof(element.email));
      id = element.id;
      hash = element.password; 
      email = element.email;
    });
    
    bcrypt.compare(password, hash).then(function(result:boolean) {
      console.log(result);
        if(result){

          const user = {
            username: username, 
            email: email,
            password: true,
          }

          const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

          return response.json({ 
            login: true,
            message: "user as access",
            userData: user,
            token : token
          });
        }
        return response.json({ 
          login: false,
          message: "wrong username or password"
        });
    });

  }
}