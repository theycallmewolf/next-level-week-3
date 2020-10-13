import { request } from 'express';
import multer from 'multer';
import path from 'path'; //handling relative navigation on node

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'), // common instead of slash because the slash differs on windows \ and mac /
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    }
  })
}