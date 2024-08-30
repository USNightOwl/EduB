export interface ICourseContent {
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
