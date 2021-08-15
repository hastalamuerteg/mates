//Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//Assets
import {
  AllUsersIcon,
  EmailIconFilled,
  FollowingIcon,
  HomeIcon,
  InstagramIcon,
  LinkedInIcon,
  MessageIconFilled,
  PostsIcons,
  SmileFaceIcon,
  TwitterIcon,
} from "../../icons/icons";

//Components
import MenuItems from "../../components/MenuItems";
import { generateNumbers } from "../../components/Post";

//Helpers
import { ICONS_FONT, THEME } from "../../helpers/helpers.styles";

export default function UserPage() {
  const router = useRouter();
  const {
    id,
    firstName,
    lastName,
    age,
    email,
    picture,
    username,
    country,
    state,
    city,
  } = router.query;

  // const formattedQueryString = router.asPath
  //   .split("?")
  //   .pop()
  //   ?.split("&")
  //   .map((prop) => prop.replace("=", ":"))
  //   .join()
  //   .split(",")
  //   .map((prop) => prop.split(":"));

  return (
    <>
      <div
        className={`bg-${THEME.background} text-${THEME.text.primary} h-auto lg:h-screen`}
      >
        <header className={`h-96 md:h-80`}>
          <div
            className={`box-col items-center md:box-row md:items-start w-11/12 h-40 mx-auto rounded-b-xl shadow-lg bg-${THEME.primary} relative`}
          >
            <Link href="/home">
              <a className={`text-${THEME.variants.primary_icons} m-4`}>
                {
                  <MenuItems>
                    <HomeIcon
                      className={`menu-icons`}
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
                        color: `${THEME.variants.primary_icons}`,
                      }}
                    />
                  </MenuItems>
                }
              </a>
            </Link>
            <div
              className={`box-col justify-center text-center md:text-left md:flex md:flex-row md:justify-between md:items-center w-11/12 absolute top-28 md:left-10`}
            >
              <div
                className={`box-col justify-center items-center md:flex md:flex-row`}
              >
                <Image
                  src={picture as string}
                  alt={`${firstName}, ${lastName}`}
                  width={180}
                  height={180}
                  className="rounded-full"
                />
                <div
                  className={`box-col justify-center items-center md:items-start md:text-left md:ml-4`}
                >
                  <h2 className={`text-${THEME.primary} font-bold`}>
                    {firstName}
                  </h2>
                  <p className={`${THEME.text.primary}`}>{username}</p>
                </div>
              </div>
              <div className={`box-row justify-center items-center my-2`}>
                {/* turn into a component */}
                <ul
                  className={`flex items-start text-lg space-x-4 text-${THEME.primary}`}
                >
                  <li className="cursor-pointer">
                    <LinkedInIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.userCardIcons}`,
                      }}
                    />
                  </li>
                  <li className="cursor-pointer">
                    <InstagramIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.userCardIcons}`,
                      }}
                    />
                  </li>
                  <li className="cursor-pointer">
                    <TwitterIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.userCardIcons}`,
                      }}
                    />
                  </li>
                  <li className="cursor-pointer">
                    <MessageIconFilled
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.userCardIcons}`,
                      }}
                    />
                  </li>
                  <li className="cursor-pointer">
                    <EmailIconFilled
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.userCardIcons}`,
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main className={`box-col w-11/12 p-6 mx-auto `}>
          <div className={`box-col justify-start w-auto `}>
            <h3 className={`text-4xl my-4 text-${THEME.primary} font-semibold`}>
              About {firstName}
            </h3>
            <p className={`${THEME.text.primary}`}>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
            </p>
            <ul className={`box-row items-center flex-wrap w-auto my-2`}>
              <li
                className={`mr-2 my-4 py-1 px-4 w-72  text-${THEME.primary} border-${THEME.primary} border rounded-xl`}
              >
                <strong>Age: </strong>
                {age}
              </li>
              <li
                className={`mr-2 my-4 py-1 px-4 w-72  text-${THEME.primary} border-${THEME.primary} border rounded-xl`}
              >
                <strong>Country: </strong> {country}
              </li>
              <li
                className={`mr-2 my-4 py-1 px-4 w-72  text-${THEME.primary} border-${THEME.primary} border rounded-xl`}
              >
                <strong>State: </strong> {state}
              </li>
              <li
                className={`mr-2 my-4 py-1 px-4 w-72  text-${THEME.primary} border-${THEME.primary} border rounded-xl`}
              >
                <strong>City: </strong> {city}
              </li>
            </ul>
          </div>
          <div className={`box-col justify-start w-auto my-4`}>
            <h3
              className={`text-4xl my-4 text-${THEME.primary}`}
            >{`${firstName}'s stats`}</h3>
            <ul className={`box-row items-center flex-wrap w-auto py-4`}>
              <li
                className={`box-row justify-start items-center  bg-${THEME.primary} text-white my-2 mx-1 px-2 py-4 w-72 rounded-xl shadow-lg`}
              >
                <span className={`text-5xl`}>{generateNumbers()}</span>
                <AllUsersIcon
                  className={`mx-2 menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
                Followers
              </li>
              <li
                className={`box-row justify-start items-center  bg-${THEME.primary} text-white my-2 mx-1 px-2 py-4 w-72 rounded-xl shadow-lg`}
              >
                <span className={`text-5xl `}>{generateNumbers()}</span>
                <FollowingIcon
                  className={`mx-2 menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
                Following
              </li>
              <li
                className={`box-row justify-start items-center  bg-${THEME.primary} text-white my-2 mx-1 px-2 py-4 w-72 rounded-xl shadow-lg`}
              >
                <span className={`text-5xl`}>{generateNumbers()}</span>
                <PostsIcons
                  className={`mx-2 menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
                Posts
              </li>
              <li
                className={`box-row justify-start items-center  bg-${THEME.primary} text-white my-2 mx-1 px-2 py-4 w-72 rounded-xl shadow-lg`}
              >
                <span className={`text-5xl`}>{generateNumbers()}</span>
                <SmileFaceIcon
                  className={`mx-2 menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
                Friends
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
