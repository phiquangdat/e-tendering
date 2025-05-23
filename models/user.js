import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  user_type: { type: String, required: true },
  password: { type: String, required: true },
  lock: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CATEGORY' }],
  tenders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TENDER' }],
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BID' }]
}, { collection: 'USER' });

// Middleware to auto-populate related fields
userSchema.pre('find', function() {
  this.populate('categories').populate('tenders').populate('bids');
});

userSchema.pre('findOne', function() {
  this.populate('categories').populate('tenders').populate('bids');
});

const User = mongoose.model('USER', userSchema);

export default User;
