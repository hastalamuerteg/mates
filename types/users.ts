import { ReactNode } from "react";

export type TUserContainer = ReactNode;

export interface IUsers {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  email: string;
  cell: string;
  picture: {
    medium: string;
  };
}
