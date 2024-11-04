import { Schema, model } from 'mongoose';

let collection = 'cities';
let schema = new Schema({
  country: { type: String, required: true, index: true },
  city: { type: String, required: true, index: true },
  photo: { type: String, required: true },
  attractions: { type: [String], required: true },
  description: { type: String, required: true },
  localCurrency: { type: String, required: true },
  continent: { type: String, required: true },
  itinerary: [{ type: Schema.Types.ObjectId, ref: 'Itinerary', required: false }]
}, {
  timestamps: true
});

let City = model(collection, schema);
export default City