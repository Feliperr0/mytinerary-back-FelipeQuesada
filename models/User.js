import { Schema, model } from 'mongoose';

let collection = 'User'

let schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    online: { type: Boolean, default: false },
    itineraries: [{ type: Schema.Types.ObjectId, ref: 'Itinerary', required: false }],
    favcities: [{ type: Schema.Types.ObjectId, ref: 'City', required: false}]
}, {
    timestamps: true
});

const User = model(collection, schema);

export default User;
