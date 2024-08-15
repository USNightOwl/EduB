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
