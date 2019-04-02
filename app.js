import mongoose from 'mongoose';
import 'dotenv/config';
import express from 'express';

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(`mongodb://${username}:${password}@ds125616.mlab.com:25616/${database}`, {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to the database...')
  })
  .catch((error) => {
    console.log(error)
  });

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

export default app;

