export interface IPost {
    id: string;
    content: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
    likes: number;
    comments: number;
  }
  
  export interface IPostResponse {
    posts: IPost[];
  }
  
  export interface ICreatePostPayload {
    content: string;
  }
  
  export interface IUpdatePostPayload {
    id: string;
    content: string;
  }
  
  export interface IDeletePostPayload {
    id: string;
  }
  
  export interface IResponse<T> {
    message: string;
    data: T;
  }
  