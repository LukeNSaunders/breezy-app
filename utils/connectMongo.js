import mongoose from 'mongoose';

mongoose.set('strictQuery', false)

const uri = 'mongodb://localhost:27017/breezy-app';

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
