const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Completed', 'Not Completed'], default: 'Not Completed' },
  assignDate: { type: Date, required: true },
  lastDate: { type: Date, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Make sure userId is required and references User
  createdOn: { type: Date, default: new Date().getTime() },
});


module.exports = mongoose.model('Task', taskSchema);