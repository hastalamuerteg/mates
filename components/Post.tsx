//Next
import Image from "next/image";
import Link from "next/link";

//React
import { useState } from "react";

//Assets
import {
  CommentIcon,
  LikeIcon,
  LikeIconFilled,
  SendIcon,
  ShareIcon,
} from "../icons/icons";

//Types
import { IUsers } from "../types/users";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";
import { colors_variants } from "../helpers/helpers.styles";

interface Props {
  user: IUsers;
}

const ROUTE_USER_ID = "users/[id]";

export function generateNumbers() {
  const number = Math.floor(Math.random() * 50 + 1);
  return number;
}

export default function Post({ user }: Props) {
  const [postLiked, setPostLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(generateNumbers());
  const [commentsAmount, setCommentsAmount] = useState(generateNumbers());

  function handlePostLiked() {
    setPostLiked(!postLiked);
  }

  const { darkmode } = useThemeContext();
  return (
    <article
      className={`box-col justify-start items-start  px-3 py-2 my-1 rounded-xl shadow-xl ${
        darkmode ? "bg-dark-tertiary" : "bg-light-tertiary"
      } ${darkmode ? "text-dark-text-primary" : "text-light-text-secondary"}`}
    >
      <div className={`box-row justify-start items-start w-full mt-2`}>
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
            <picture className={`mr-4`}>
              <Image
                alt={`${user.name.first}, ${user.name.last}`}
                src={user.picture.medium}
                width={75}
                height={75}
                className="rounded-full cursor-pointer"
              />
            </picture>
          </a>
        </Link>
        <div className={`box-col items-start text-left`}>
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
              <h2 className="font-semibold cursor-pointer text-light-primary">{`${user.name.first} ${user.name.last}`}</h2>
            </a>
          </Link>
          <span>
            <small>15 hrs &#8226; ????</small>
          </span>
        </div>
      </div>
      <div className={`box-col justify-start items-start my-2`}>
        <h3 className="my-2 font-semibold">{"Lorem ipsum"}</h3>
        <p>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          }
        </p>
      </div>
      <div className={`box-col justify-around items-start w-full`}>
        <div className={`box-row justify-between w-full my-2`}>
          <span className="flex justify-center items-center cursor-pointer">
            {postLiked ? likesAmount + 1 : likesAmount} ????
          </span>
          <span className="cursor-pointer">{commentsAmount} comments</span>
        </div>
      </div>
      <ul
        className={`box-row justify-around items-center pt-1 border-t w-full`}
      >
        <li
          className={`box-col py-2 px-4 rounded-xl cursor-pointer transition-all hover:bg-light-secondary hover:text-light-text-primary`}
          onClick={handlePostLiked}
        >
          {postLiked ? (
            <LikeIconFilled style={{ color: `${colors_variants.likes}` }} />
          ) : (
            <LikeIcon />
          )}
          Like
        </li>
        <li
          className={`box-col py-2 px-4 rounded-xl cursor-pointer transition-all hover:bg-light-secondary hover:text-light-text-primary`}
        >
          <CommentIcon />
          Comment
        </li>
        <li
          className={`box-col py-2 px-4 rounded-xl cursor-pointer transition-all hover:bg-light-secondary hover:text-light-text-primary`}
        >
          <ShareIcon />
          Share
        </li>
        <li
          className={`box-col py-2 px-4 rounded-xl cursor-pointer transition-all hover:bg-light-secondary hover:text-light-text-primary`}
        >
          <SendIcon />
          Send
        </li>
      </ul>
    </article>
  );
}
