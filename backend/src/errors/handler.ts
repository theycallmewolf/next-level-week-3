import { ErrorRequestHandler } from 'express';
import { Handler } from 'leaflet';

const errorHandler : ErrorRequestHandler = ( error, request, response, next ) => {
  // for dev team
  console.error(error);

  // for client
  return response.status(500).json({ message: 'internal server error'});
}

export default errorHandler;