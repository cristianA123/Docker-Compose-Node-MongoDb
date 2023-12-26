import express from 'express';
import {calculate} from './controllers.js';
import { mongoose } from 'mongoose';
import { config } from '../config.js';




const app = express();

mongoose.connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err.message));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Worldas');
    });

app.post('/api/mode', calculate);

app.listen(4000, () => {
    console.log('Example app listening on port 4000');
    });
