import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

// {
//   "name" , ['obrigatório', 'mínimo de caracteres'],
//   "latitude" , ['obrigatório', 'mínimo de caracteres'],
//   ...
// }

interface ValidationErrors {
  [key: string] : string[];
}

const errorHandler : ErrorRequestHandler = ( error, request, response, next ) => {

  if(error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    })

    return response.status(400).json({message: 'validation fails', errors}) //400 - bad request
  }

  // for dev team
  console.error(error);

  // for client
  return response.status(500).json({ message: 'internal server error'});
}

export default errorHandler;