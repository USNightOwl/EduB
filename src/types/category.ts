export interface ICategory {
  id: string;
  name: string;
  slug: string;
}

export interface ITopic {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
}

export interface ITopicResponse {
  name: string;
  id: string;
  slug: string;
  category: { id: string; name: string; slug: string };
}

export interface ICategoryResponse {
  name: string;
  id: string;
  slug: string;
  topics: { id: string; name: string; slug: string }[];
}
