const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const config =  require('./../config.js');

const { connectDB } = require('./config/db');

const userRoutesV1 = require('./routes/v1/user.route');
const customerRoutesV1 = require('./routes/v1/customer.route');
const driverRoutesV1 = require('./routes/v1/driver.route');
const adminRoutesV1 = require('./routes/v1/admin.route');
const cabRoutesV1 = require('./routes/v1/cab.route');

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

app.use('/api/v1/user/', userRoutesV1);
app.use('/api/v1/customer/', customerRoutesV1);
app.use('/api/v1/driver/', driverRoutesV1);
app.use('/api/v1/admin/', adminRoutesV1);
app.use('/api/v1/cab/', cabRoutesV1);

app.use(notFoundError);
app.use(errorHandler);

const PORT = 6000;

app.listen(PORT, console.log(`Server running in localhost mode on Port 6000`));
