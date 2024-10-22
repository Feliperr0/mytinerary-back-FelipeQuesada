import { Schema, model } from 'mongoose';

let collection = 'cities';

let schema = new Schema({
  _id: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  photo: { type: String, required: true },
  attractions: { type: [String], required: true },
  description: { type: String, required: true },
  localCurrency: { type: String, required: true },
  continent: { type: String, required: true },
}, {
  timestamps: true
});

let City = model(collection, schema);
export default City;