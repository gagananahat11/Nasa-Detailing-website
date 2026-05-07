import { NextResponse } from "next/server";
import { connectMongo } from "@/src/lib/mongodb";
import { Booking } from "@/src/models/Booking";

const services = ["PPF", "Ceramic Coating", "Graphene Coating"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = String(body.fullName ?? "").trim();
    const mobileNumber = String(body.mobileNumber ?? "").trim();
    const location = String(body.location ?? "").trim();
    const service = String(body.service ?? "").trim();

    if (!fullName || !mobileNumber || !location || !services.includes(service)) {
      return NextResponse.json(
        { message: "Please fill all booking details correctly." },
        { status: 400 }
      );
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(mobileNumber)) {
      return NextResponse.json(
        { message: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    await connectMongo();

    const booking = await Booking.create({
      fullName,
      mobileNumber,
      location,
      service,
    });

    return NextResponse.json(
      { message: "Booking request saved.", bookingId: booking._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking request failed:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
