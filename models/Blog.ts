// models/Blog.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IContentBlock {
  type: 'paragraph' | 'heading' | 'code' | 'image';
  content: string;      // Text, Heading, Image URL, or Code snippet
  language?: string;    // e.g. 'typescript', 'javascript', 'java', 'bash'
  caption?: string;     // Optional caption for image or code file name
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  blocks: IContentBlock[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContentBlockSchema = new Schema<IContentBlock>({
  type: { type: String, enum: ['paragraph', 'heading', 'code', 'image'], required: true },
  content: { type: String, required: true },
  language: { type: String, default: 'typescript' },
  caption: { type: String, default: '' },
});

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Next.js', 'JavaScript', 'Java', 'AI & ML', 'Cloud & DevOps', 'Latest Tech'],
    },
    tags: [{ type: String }],
    coverImage: { type: String, required: true },
    blocks: [ContentBlockSchema],
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);