import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
    },
    { collection: 'Users' } // force Mongoose to use exact collection name
);


export default mongoose.models.users || mongoose.model('users', UserSchema);
// const User = mongoose.model('Users', UserSchema);
// module.exports = User;
