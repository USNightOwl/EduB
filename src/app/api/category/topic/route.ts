import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/helper";
import { listCategoriesWithTopics } from "@/models/category";

export async function GET() {
  try {
    const categories = await listCategoriesWithTopics();
    return NextResponse.json({ message: "success", data: categories });
  } catch (error) {
    console.log("Error getting all categories", getErrorMessage(error));

    return NextResponse.json(
      { message: `Internal Server Error: ${getErrorMessage(error)}` },
      {
        status: 500,
      },
    );
  }
}
