
import { mongoose } from "mongoose";

const modeSchema = new mongoose.Schema({
  output: [{ type: Number }],
});

export const ModeModel = mongoose.model('Mode', modeSchema);
