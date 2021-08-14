//React
import { ReactNode } from "react";

//Helpers
import { ICONS_FONT, THEME } from "../helpers/helpers.styles";

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
      className={`box-col justify-center my-16 mx-2 w-full md:w-3/5 py-2`}
    >
      <div
        className={`box-col justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md bg-${THEME.tertiary}`}
      >
        <fieldset className="w-full">
          <input
            type="text"
            placeholder="Nova publicação"
            className={`py-2 px-2 h-full w-full transition-colors bg-${THEME.tertiary} focus:placeholder-${THEME.primary} focus:outline-none `}
          />
        </fieldset>
        <div
          className={`box-row justify-center items-center  border-t w-full `}
        >
          <div className={`box-row justify-around items-center  w-full`}>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.secondary} hover:text-${THEME.tertiary}`}
            >
              <CameraIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.secondary} hover:text-${THEME.tertiary}  `}
            >
              <VideoIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.secondary} hover:text-${THEME.tertiary}  `}
            >
              <PictureIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${THEME.secondary} hover:text-${THEME.tertiary}  `}
            >
              <MapIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
          </div>
        </div>
      </div>

      {post}
      <div className={`box-row justify-center m-4`}>
        <PrimaryButton backgroundColor={`bg-${THEME.primary}`}>
          Load more
        </PrimaryButton>
      </div>
    </section>
  );
}
