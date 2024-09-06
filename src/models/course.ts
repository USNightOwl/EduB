import { createChapters } from "./chapter";
import { createAttachment } from "./attachment";
import { type IChapter } from "@/types/course";
import prisma from "@/lib/prismadb";

export async function createCourse(
  title: string,
  brief: string,
  detail: string,
  topicId: string,
  price: number,
  discount: number,
  photo: string[],
  curriculum: IChapter[],
) {
  const topic = await prisma.topic.findUnique({ where: { id: topicId } });
  if (!topic) throw new Error("Topic not found");

  const initialCourse = await prisma.course.create({
    data: {
      title,
      briefDescription: brief,
      detailDescription: detail,
      price,
      discountPercent: discount,
      topic: {
        connect: {
          id: topic.id,
        },
      },
    },
  });

  // add chapter information
  const chapters = await createChapters(curriculum);

  // add image information
  const thumb = await createAttachment(photo[0]);

  const newCourse = await prisma.course.update({
    where: {
      id: initialCourse.id,
    },
    data: {
      chapter: {
        connect: chapters.map((chapter) => {
          return {
            id: chapter.id,
          };
        }),
      },
      attachment: {
        connect: {
          id: thumb.id,
        },
      },
    },
  });

  return newCourse;
}
