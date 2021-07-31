export interface IUsers {
  login: {
    uuid: string;
    username: string;
  };
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  gender: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  email: string;
  cell: string;
  picture: {
    medium: string;
    large: string;
  };
}
[];
