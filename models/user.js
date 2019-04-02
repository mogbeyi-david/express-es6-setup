import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;