import { ReactNode } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import {
  GLOBAL_CONTAINERS,
  GLOBAL_ICONOGRAPHY,
  GLOBAL_THEME,
  GLOBAL_TYPOGRAPHY,
} from "../../helpers/helpers.styles";
import { useRouter } from "next/router";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "../../icons/icons";

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

  // query:
  // age: "27"
  // city: "Coral Springs"
  // country: "United States"
  // email: "duane.moore@example.com"
  // firstName: "Duane"
  // id: "2f4315b2-85e2-41a8-a349-9b43754f1017"
  // lastName: "Moore"
  // picture: "https://randomuser.me/api/portraits/men/87.jpg"
  // state: "Idaho"
  // username: "brownduck491"

  return (
    <>
      <header
        className={`${GLOBAL_CONTAINERS.flexRowContainer} w-11/12 h-40 mx-auto my-2 rounded-lg shadow-lg ${GLOBAL_THEME.userPageHeaderBackgroundColor} relative`}
      >
        <div
          className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-between items-center w-11/12 absolute top-28 left-10`}
        >
          <div className={`${GLOBAL_CONTAINERS.flexRowContainer} items-center`}>
            <Image
              src={picture as string}
              alt={`${firstName}, ${lastName}`}
              width={180}
              height={180}
              className="rounded-full"
            />
            <div className={`${GLOBAL_CONTAINERS.flexColumnContainer} ml-4`}>
              <h2 className={`${GLOBAL_TYPOGRAPHY.mainFontsColor} font-bold`}>
                {firstName}
              </h2>
              <p>{username}</p>
            </div>
          </div>
          <div className={`${GLOBAL_CONTAINERS.flexRowContainer}`}>
            {/* turn into a component */}
            <ul
              className={`flex items-start text-lg space-x-4 ${GLOBAL_TYPOGRAPHY.userCardFontColor}`}
            >
              <li className="cursor-pointer">
                <LinkedInIcon
                  className={GLOBAL_ICONOGRAPHY.menuIcons}
                  style={{
                    fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsIcons}`,
                    color: `${GLOBAL_THEME.userCardExpandDetailsIcons}`,
                  }}
                />
              </li>
              <li className="cursor-pointer">
                <InstagramIcon
                  className={GLOBAL_ICONOGRAPHY.menuIcons}
                  style={{
                    fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsIcons}`,
                    color: `${GLOBAL_THEME.userCardExpandDetailsIcons}`,
                  }}
                />
              </li>
              <li className="cursor-pointer">
                <TwitterIcon
                  className={GLOBAL_ICONOGRAPHY.menuIcons}
                  style={{
                    fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsIcons}`,
                    color: `${GLOBAL_THEME.userCardExpandDetailsIcons}`,
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center items-center h-screen mt-10`}
      >
        <div
          className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-between items-center h-5/6 w-10/12 ${GLOBAL_THEME.userPageBackgroundColor}`}
        >
          <div
            className={`${GLOBAL_CONTAINERS.flexColumnContainer} items-center w-1/2 h-full`}
          >
            <div
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} items-center text-center justify-center p-4 w-full`}
            ></div>
          </div>
          <div
            className={`${GLOBAL_CONTAINERS.flexColumnContainer} items-center w-1/2 h-full`}
          ></div>
        </div>
      </div>
    </>
  );
}
