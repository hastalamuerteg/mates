import Image from "next/image";
import { GLOBAL_CONTAINERS } from "../helpers/helpers.styles";
import { IPost } from "../types/post";
import { IUsers } from "../types/users";

interface Props {
  children: IPost;
  user: IUsers;
}
export default function Post({ children: post, user }: Props) {
  return (
    <div className={`${GLOBAL_CONTAINERS.flexColumnContainer}`}>
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-start items-start`}
      >
        <picture className={``}>
          <Image
            alt={`${user.name.first}, ${user.name.last}`}
            src={user.picture.medium}
            width={75}
            height={75}
          />
        </picture>
        <div className={``}>{post.owner}</div>
      </div>
      <div>
        <h2>{post.post_body.title}</h2>
        <p>{post.post_body.description}</p>
      </div>
    </div>
  );
}
