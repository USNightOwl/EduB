import prisma from "@/lib/prismadb";
import { toSlug } from "@/utils/helper";

export async function listCategories() {
  const categories = await prisma.category.findMany({
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });
  return categories;
}

export async function newCategory(category: string) {
  const slug = toSlug(category);

  // add new category
  const newCategory = await prisma.category.create({
    data: {
      name: category,
      slug,
    },
  });

  return newCategory;
}
