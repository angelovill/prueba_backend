import { Schema, model } from 'mongoose';

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Item = model('Item', ItemSchema);

export default Item;