import mongoose from 'mongoose';

const tenderSchema = new mongoose.Schema({
  tender_id: { type: String, required: true, unique: true },
  tender_name: { type: String, required: true },
<<<<<<< HEAD
  description: { type: String, required: true }, // Add description field
=======
>>>>>>> 4168e75b2d66b39fd932e8a3a429185f6d60b733
  construction_from: { type: Date, required: true },
  construction_to: { type: Date, required: true },
  date_of_tender_notice: { type: Date, required: true },
  date_of_tender_close: { type: Date, required: true },
  date_of_tender_winner: { type: Date },
  bidding_price: { type: Number, required: true, min: 0 },
  tender_status: { type: String, enum: ['Open', 'Closed', 'Pending'], default: 'Pending' },
  staff_id: { type: String, required: true },
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'USER', default: null }, // 0..1 relationship
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BID' }] // 1..M relationship
}, { collection: 'TENDER' });

const Tender = mongoose.model('TENDER', tenderSchema);

<<<<<<< HEAD
export default Tender;
=======
export default Tender;
>>>>>>> 4168e75b2d66b39fd932e8a3a429185f6d60b733
