import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]/options";
import { getErrorMessage } from "@/utils/helper";
import { deleteCategory } from "@/models/category";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user && session?.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    }
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const category = await deleteCategory(id);
    return NextResponse.json({ message: "success", data: category });
  } catch (error) {
    console.log("Error deleting category", getErrorMessage(error));

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2023") {
        return NextResponse.json({ message: "Invalid category id" }, { status: 400 });
      }
      if (error.code === "P2025") {
        return NextResponse.json({ message: "Category not found" }, { status: 400 });
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
