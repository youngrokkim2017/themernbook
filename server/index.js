import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import AuthRoute from './routes/AuthRoute.js';

dotenv.config();

const app = express();

// middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

mongoose
    .connect(
        process.env.MONGO_DB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`)))
    .catch((error) => console.log(error))

// routes
app.use('/auth', AuthRoute)