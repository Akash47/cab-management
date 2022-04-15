const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const config =  require('./../config.js');

const { connectDB } = require('./config/db');

const adminRoutesV1 = require('./routes/v1/admin.route');


const { notFoundError, errorHandler } = require('./middlewares/errorHandlerMiddleware');
const app = express();

// dotenv.config();

//connectDB();

app.use(express.json());

// app.use(limiter)

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Server is running....');
});

// app.use(express.static('public'));

app.use('/api/v1/admin/', adminRoutesV1);

app.use(notFoundError);
app.use(errorHandler);

const PORT = 6000;

app.listen(PORT, console.log(`Server running in localhost mode on Port 6000`));
