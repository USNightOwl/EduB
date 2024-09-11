import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/helper";
import { getCourseById } from "@/models/course";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const course = await getCourseById(id);
    return NextResponse.json({ message: "success", data: course });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2023") {
        return NextResponse.json({ message: "Invalid course id" }, { status: 400 });
      }
      if (error.code === "P2025") {
        return NextResponse.json({ message: "Course not found" }, { status: 400 });
      }
    }

    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
