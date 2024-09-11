import { type ITopic } from "./category";
import { type IAttachment } from "./global";

export interface IAuthor {
  name: string;
  id: string;
  Bio?: string;
}

export interface ICourseContent {
  id: string;
  title: string;
  topic: string; // topic
  author: string; // name author
  rating: number;
  discount?: number;
  price: number;
}

export interface ICourse extends ICourseContent {
  thumbnail: string; // link image
}

export interface ILecture {
  lectureId: number;
  lectureName: string;
  urlVideo: string;
  preview: boolean;
}

export interface IChapter {
  chapterId: number;
  chapterName: string;
  lecture: ILecture[];
}

export interface ILectureResponse {
  id: string;
  name: string;
  url: string;
  preview: boolean;
}

export interface IChapterResponse {
  id: string;
  name: string;
  lecture: ILectureResponse[];
}

export interface ICourseResponse {
  id: string;
  title: string;
  briefDescription: string;
  detailDescription: string;
  topicId: string;
  topic: ITopic;
  discountPercent: number;
  price: number;
  attachment: IAttachment;
  author: IAuthor;
  chapter: IChapterResponse[];
}
