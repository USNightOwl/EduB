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

export async function listTopics() {
  const topics = await prisma.topic.findMany({
    include: {
      category: true,
    },
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return topics;
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

export async function deleteCategory(id: string) {
  const deteledCategory = await prisma.category.delete({
    where: {
      id,
    },
  });

  return deteledCategory;
}

export async function newTopic(topic: string, categoryId: string) {
  const slug = toSlug(topic);

  const newTopic = await prisma.topic.create({
    data: {
      name: topic,
      slug,
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return newTopic;
}
