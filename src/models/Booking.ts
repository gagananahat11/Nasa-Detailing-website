import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    service: {
      type: String,
      required: true,
      enum: ["PPF", "Ceramic Coating", "Graphene Coating"],
    },
  },
  {
    timestamps: true,
  }
);

export const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
