import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
    points: Number,
    due_date: Date,
    available_date: Date,
  },
  { collection: "assignments" }
);
export default schema;
