import { type Lecture, type Chapter } from "@prisma/client";
import { type ILecture, type IChapter } from "@/types/course";
import prisma from "@/lib/prismadb";

export type FullChapter = Chapter & {
  lecture: Lecture[];
};

export async function createChapter(chapter: IChapter) {
  const initialChapter = await prisma.chapter.create({
    data: {
      name: chapter.chapterName,
    },
  });

  // Create a new lectures
  const newLectures = await createLectures(chapter.lecture);

  // connect lectures to chapter
  const newChapter = await prisma.chapter.update({
    where: {
      id: initialChapter.id,
    },
    data: {
      name: chapter.chapterName,
      lecture: {
        connect: newLectures.map((lecture) => {
          return { id: lecture.id };
        }),
      },
    },
  });

  return newChapter;
}

export async function createLecture(lecture: ILecture) {
  const newLecture = await prisma.lecture.create({
    data: {
      name: lecture.lectureName,
      url: lecture.urlVideo,
      preview: lecture.preview,
    },
  });

  return newLecture;
}

export async function createChapters(chapters: IChapter[]) {
  return Promise.all(
    chapters.map((chapter) => {
      return createChapter(chapter);
    }),
  );
}

export async function createLectures(lectures: ILecture[]) {
  return Promise.all(
    lectures.map((lecture) => {
      return createLecture(lecture);
    }),
  );
}
