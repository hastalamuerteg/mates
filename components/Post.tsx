import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GLOBAL_CONTAINERS, GLOBAL_THEME } from "../helpers/helpers.styles";
import {
  CommentIcon,
  LikeIcon,
  LikeIconFilled,
  SendIcon,
  ShareIcon,
} from "../icons/icons";
import { IUsers } from "../types/users";

interface Props {
  user: IUsers;
}

const ROUTE_USER_ID = "users/[id]";

export default function Post({ user }: Props) {
  const [postLiked, setPostLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(generateNumbers());
  const [commentsAmount, setCommentsAmount] = useState(generateNumbers());

  function handleUserClick() {
    console.log(user.login.uuid);
  }
  function generateNumbers() {
    const number = Math.floor(Math.random() * 50 + 1);
    return number;
  }

  function handlePostLiked() {
    setPostLiked(!postLiked);
  }
  return (
    <article
      className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md ${GLOBAL_THEME.homePostBackgroundColor}`}
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
            className="rounded-full cursor-pointer"
            onClick={handleUserClick}
          />
        </picture>
        <div
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} items-start text-left`}
        >
          <Link
            href={{
              pathname: ROUTE_USER_ID,
              query: {
                id: user.login.uuid,
                username: user.login.username,
                firstName: user.name.first,
                lastName: user.name.last,
                age: user.dob.age,
                email: user.email,
                country: user.location.country,
                city: user.location.city,
                state: user.location.state,
                picture: user.picture.large,
              },
            }}
            as={user.login.uuid}
          >
            <a>
              <h2
                className="font-semibold cursor-pointer"
                onClick={handleUserClick}
              >{`${user.name.first} ${user.name.last}`}</h2>
            </a>
          </Link>
          <span>
            <small>15 hrs &#8226; 🌍</small>
          </span>
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
            {postLiked ? likesAmount + 1 : likesAmount} 👍
          </span>
          <span className="cursor-pointer">{commentsAmount} comments</span>
        </div>
      </div>
      <ul
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-around items-center pt-1 border-t w-full`}
      >
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}`}
          onClick={handlePostLiked}
        >
          {postLiked ? (
            <LikeIconFilled
              style={{ color: `${GLOBAL_THEME.homePostLiked}` }}
            />
          ) : (
            <LikeIcon />
          )}
          Like
        </li>
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}`}
        >
          <CommentIcon />
          Comment
        </li>
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}`}
        >
          <ShareIcon />
          Share
        </li>
        <li
          className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 rounded-md cursor-pointer transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}`}
        >
          <SendIcon />
          Send
        </li>
      </ul>
    </article>
  );
}
