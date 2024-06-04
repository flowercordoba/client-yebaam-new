export interface IStory {
    id: string;
    content: string;
    createdAt: Date;
    userId: string;
  }
  
  export interface ICreateStoryPayload {
    content: string;
    userId: string;
  }
  
  export interface IUpdateStoryPayload {
    id: string;
    content: string;
  }
  
  export interface IDeleteStoryPayload {
    id: string;
  }
  