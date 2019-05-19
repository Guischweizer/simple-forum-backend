import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

PostSchema.plugin(mongoosePaginate);

mongoose.model("Posts", PostSchema);
