export interface IAllPosts {
  message: string;
  paginationInfo: PaginationInfo;
  posts: IPost[];
}

export interface IPost {
  _id: string;
  body: string;
  image: string;
  user: User;
  createdAt: string;
  comments: Comment[];
  id: string;
}

export interface Comment {
  _id: string;
  content?: string;
  commentCreator: User;
  post: string;
  createdAt: string;
}

interface User {
  _id: string;
  name: string;
  photo: string;
}

interface PaginationInfo {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
  total: number;
}
