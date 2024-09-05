import { type IChapter } from "@/types/course";

export async function createCourse(
  title: string,
  brief: string,
  detail: string,
  categoryId: string,
  topicId: string,
  price: number,
  discount: number,
  photo: string[],
  curriculum: IChapter[],
) {}
