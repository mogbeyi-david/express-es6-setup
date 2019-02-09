import mongoose from 'mongoose';
import 'dotenv/config';
import express from 'express';

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(`mongodb://${username}:${password}@ds145704.mlab.com:45704/${database}`, {useNewUrlParser: true})
  .then(() => {return true})
  .catch((error)=>{console.log(error)});

app.listen(PORT, ()=>{
  console.log(`App is running on port: ${PORT}`);
});

export default app;

