import mongoose from 'mongoose';
import { CategoryFields } from '../types';

const CategorySchema = new mongoose.Schema<CategoryFields>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
