const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const axios = require('axios');

const url = process.env.SERVER_URL;
console.log(url);
const interval = 30000; // Interval in milliseconds (30 seconds)
app.use(cors());

//import internal routes
const featuredAirdropRouter = require('./routes/FeaturedAirdropRoutes');
const airdropRouter = require('./routes/AirdropRoutes');
const gameRouter = require('./routes/GameRoutes');
const rewardTaskRouter = require('./routes/RewardTaskRoutes')
const cryptoNewsRouter = require('./routes/CryptoNewsRoutes');
const tokenFarmingRouter = require('./routes/TokenFarmingRoutes');
const academyRouter = require('./routes/AcademyPostRoutes');
const subscribeRouter = require('./routes/SubscriberRoutes');
const searchRouter = require('./routes/searchRoute');

// Use middleware if needed
app.use(express.json());

// Mount router(s)
app.use('/api', featuredAirdropRouter); // Mount router with a base path
app.use('/', airdropRouter);
app.use('/', gameRouter);
app.use('/', rewardTaskRouter);
app.use('/', cryptoNewsRouter);
app.use('/', tokenFarmingRouter);
app.use('/', academyRouter);
app.use('/', subscribeRouter);
app.use('/', searchRouter);

const port = process.env.PORT || 1225;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to Mongoose database');

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
  }).catch((error) => {
    console.log(error);
});

// Ping server to keep it awake
function reloadWebsite() {
  if (!url) {
    console.error('SERVER_URL is not defined');
    return;
  }
  
  axios.get(url, { timeout: 5000 }) // Add timeout
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, 
        error.response ? `Status: ${error.response.status}` : error.message);
    });
}
setInterval(reloadWebsite, interval);