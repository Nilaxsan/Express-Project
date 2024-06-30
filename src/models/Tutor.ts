import mongoose, { Schema, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface TutorI {
  name: string;
  email: string;
  address: string;
}

// 2. Create a Schema corresponding to the document interface.
const tutorSchema = new Schema<TutorI>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const Tutor = model<TutorI>("Tutor", tutorSchema);
export default Tutor;
