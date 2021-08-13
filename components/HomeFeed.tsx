//React
import { ReactNode } from "react";

//Helpers
import {
  GLOBAL_ICONOGRAPHY,
  GLOBAL_CONTAINERS,
  THEME,
} from "../helpers/helpers.styles";

//Assets
import { CameraIcon, VideoIcon, PictureIcon, MapIcon } from "../icons/icons";

//Components
import PrimaryButton from "./PrimaryButton";

interface Props {
  children: ReactNode;
}

export default function HomeFeed({ children: post }: Props) {
  return (
    <section
      className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-center my-16 mx-2 w-full md:w-3/5 py-2`}
    >
      <div
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md bg-${THEME.white}`}
      >
        <fieldset className="w-full">
          <input
            type="text"
            placeholder="Nova publicação"
            className={`py-2 px-2 h-full w-full transition-colors bg-${THEME.white} focus:placeholder-${THEME.primary} focus:outline-none `}
          />
        </fieldset>
        <div
          className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center items-center  border-t w-full `}
        >
          <div
            className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-around items-center  w-full`}
          >
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.tertiary}`}
            >
              <CameraIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.tertiary}  `}
            >
              <VideoIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.tertiary}  `}
            >
              <PictureIcon
                style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
              />
            </button>
            <button
              className={`${GLOBAL_CONTAINERS.flexColumnContainer} py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.tertiary}  `}
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
          fontColor={`text-${THEME.white}`}
          backgroundColor={`bg-${THEME.secondary}`}
        >
          Load more
        </PrimaryButton>
      </div>
    </section>
  );
}
