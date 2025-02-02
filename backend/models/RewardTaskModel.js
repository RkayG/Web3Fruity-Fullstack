const mongoose = require('mongoose');

// Model for Reward for Tasks Platforms
// Required fields [ type: Strings ]: logo, title, activities, token, free, active, website
// Other fields [ type: Strings ]: api_id

// api_id: refers to coingecko api_id for reward token (to fetch price)

const rewardTaskSchema = new mongoose.Schema(
  {
     logo: { type: String, required: true },

     title: { type: String, required: true },
     slug: { type: String, unique: true },
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

// Middleware to generate slug from rewardTask title
rewardTaskSchema.pre('save', async function(next) {
  if (this.isModified('title')) {
    let slug = slugify(this.title, { lower: true, strict: true });
    
    // Check for existing slugs
    let slugExists = await mongoose.models.rewardTask.findOne({ slug: slug });
    let counter = 1;

    // Append a unique identifier if the slug already exists
    while (slugExists) {
      slug = `${slug}-${counter}`;
      slugExists = await mongoose.models.rewardTask.findOne({ slug: slug });
      counter++;
    }
    
    this.slug = slug;
  }
  next();
});

rewardTaskSchema.index({ slug: 1 });
const RewardTask = mongoose.model('RewardTask', rewardTaskSchema);

module.exports = RewardTask;
