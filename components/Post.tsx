import Image from "next/image";
import { GLOBAL_CONTAINERS, GLOBAL_THEME } from "../helpers/helpers.styles";
import { CommentIcon, LikeIcon, SendIcon, ShareIcon } from "../icons/icons";
import { IPost } from "../types/post";
import { IUsers } from "../types/users";

interface Props {
  user: IUsers;
}
export default function Post({ user }: Props) {
  return (
    <article
      className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md ${GLOBAL_THEME.postBackgroundColor}`}
    >
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-start items-start w-full`}
      >
        <picture className={`mr-4`}>
          <Image
            alt={`${user.name.first}, ${user.name.last}`}
            src={user.picture.medium}
            width={75}
            height={75}
            className="rounded-full"
          />
        </picture>
        <div
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} items-start text-left`}
        >
          <h2 className="font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
          <span>1d &#8226; 🌍</span>
        </div>
      </div>
      <div
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-start items-start my-2`}
      >
        <h3 className="my-2 font-semibold">{"Lorem ipsum"}</h3>
        <p>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          }
        </p>
      </div>
      <div
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-around items-start w-full`}
      >
        <div
          className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-between w-full my-2`}
        >
          <span className="flex justify-center items-center cursor-pointer">
            23 👍
          </span>
          <span className="cursor-pointer">7 comments</span>
        </div>
      </div>
      <ul
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-around items-center pt-1 border-t w-full`}
      >
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:bg-lightblue-light`}
        >
          <LikeIcon />
          Like
        </li>
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:bg-lightblue-light`}
        >
          <CommentIcon />
          Comment
        </li>
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:bg-lightblue-light`}
        >
          <ShareIcon />
          Share
        </li>
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:bg-lightblue-light`}
        >
          <SendIcon />
          Send
        </li>
      </ul>
    </article>
  );
}
