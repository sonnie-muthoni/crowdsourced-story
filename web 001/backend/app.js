const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running...');
        });
    })
    .catch(err => console.error(err));