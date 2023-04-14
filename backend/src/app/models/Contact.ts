import { Schema, model } from 'mongoose';

export default model('Contacts', new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  category: {
    type: String
  },
  email: {
    type: String
  },
  imagePath: {
    type: String
  }
}));