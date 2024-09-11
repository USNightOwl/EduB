import { type Topic, type User, type Attachment, type Course } from "@prisma/client";
import { createChapters } from "./chapter";
import { createAttachment } from "./attachment";
import { type IChapter } from "@/types/course";
import prisma from "@/lib/prismadb";

export type FullCourse = Course & {
  attachment: Attachment | null;
  topic: Topic | null;
  author: User | null;
};

export async function getCourseById(courseId: string) {
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      topic: true,
      attachment: true,
      author: true,
      chapter: {
        include: {
          lecture: true,
        },
      },
    },
  });

  return course;
}

export async function getNewestCourses() {
  const newest_course = await prisma.course.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      topic: true,
      attachment: true,
      author: true,
      chapter: true,
    },
    take: 10,
  });

  return newest_course;
}

export async function createCourse(
  title: string,
  brief: string,
  detail: string,
  topicId: string,
  price: number,
  discount: number,
  photo: string[],
  curriculum: IChapter[],
  authorId: string,
) {
  const topic = await prisma.topic.findUnique({ where: { id: topicId } });
  if (!topic) throw new Error("Topic not found");

  const author = await prisma.user.findUnique({ where: { id: authorId } });
  if (!author) throw new Error("Unauthenticated");

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
      author: {
        connect: {
          id: author.id,
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
