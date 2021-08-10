import { ReactNode } from "react";
import { GLOBAL_CONTAINERS, GLOBAL_THEME } from "../helpers/helpers.styles";
import { IPost } from "../types/post";
import { IUsers } from "../types/users";
import { CameraIcon, VideoIcon, PictureIcon, MapIcon } from "../icons/icons";
import { GLOBAL_ICONOGRAPHY } from "../helpers/helpers.styles";
import PrimaryButton from "./PrimaryButton";

interface Props {
  children: ReactNode;
}

export default function HomeFeed({ children: post }: Props) {
  return (
    <section className={`flex flex-col justify-center mt-16 w-3/5 py-2`}>
      <div
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md ${GLOBAL_THEME.homePostBackgroundColor}`}
      >
        <fieldset className="w-full">
          <input
            type="text"
            placeholder="Nova publicação"
            className={`py-2 h-full w-full transition-colors focus:outline-none focus:${GLOBAL_THEME.homePostPlaceholderFocusColor}`}
          />
        </fieldset>
        <div
          className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center items-center  border-t w-full `}
        >
          <div
            className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-around items-center  w-full`}
          >
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}  `}
            >
              <CameraIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}  `}
            >
              <VideoIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}  `}
            >
              <PictureIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:${GLOBAL_THEME.homePostIconsColorHover}  `}
            >
              <MapIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
          </div>
        </div>
      </div>

      {post}
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center m-4`}
      >
        <PrimaryButton
          fontColor={`${GLOBAL_THEME.primaryButtonBackgroundColor}`}
          backgroundColor={`${GLOBAL_THEME.primaryButtonFontColor}`}
        >
          Load more
        </PrimaryButton>
      </div>
    </section>
  );
}
