export interface IPost {
  avatar: string;
  owner: string;
  user_id: string;
  post_date: string;
  post_body: {
    title: string;
    description: string;
    comments: string;
    views: string;
  };
}
