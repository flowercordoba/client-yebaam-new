export interface IRoom {
    id: string;
    name: string;
    members: string[];
  }
  
  export interface ICreateRoomPayload {
    name: string;
    members: string[];
  }
  
  export interface IUpdateRoomPayload {
    id: string;
    name: string;
    members: string[];
  }
  
  export interface IDeleteRoomPayload {
    id: string;
  }
  