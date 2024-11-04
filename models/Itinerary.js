import { Schema, model } from 'mongoose';

let collection = 'Itinerary';

let schema = new Schema({
    photo: { type: String, required: true },
    accountName: { type: String, required: true },
    price: { type: Number, min: 1, max: 5, required: true }, 
    tripDuration: { type: String, required: true },
    likes: { type: Number, default: 0 },
    hashtags: [{ type: String }]
}, {
    timestamps: true  
});

let Itinerary = model(collection, schema);

export default Itinerary;

