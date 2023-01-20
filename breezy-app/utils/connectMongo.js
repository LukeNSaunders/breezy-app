import mongoose from 'mongoose';

mongoose.set('strictQuery', false)

const uri = 'mongodb://127.0.0.1:27017/breezy-app';

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
