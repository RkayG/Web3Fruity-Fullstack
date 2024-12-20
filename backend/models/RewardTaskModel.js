const mongoose = require('mongoose');

// Model for Reward for Tasks Platforms
// Required fields [ type: Strings ]: logo, title, activities, token, free, active, website
// Other fields [ type: Strings ]: api_id

// api_id: refers to coingecko api_id for reward token (to fetch price)

const rewardTaskSchema = new mongoose.Schema(
  {
     logo: { type: String, required: true },
     title: { type: String, required: true },
     activities: { type: String, required: true },
     token: { type: String },
     free: { type: String, required: true },
     active: { type: String, required: true },
     website: { type: String, required: true},
     api_id: { type: String },
     keywords: {type: Array}
  },
  {
    timestamps: true
  }
);

const RewardTask = mongoose.model('RewardTask', rewardTaskSchema);

module.exports = RewardTask;
