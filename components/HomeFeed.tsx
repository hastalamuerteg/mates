//React
import { ReactNode } from "react";

//Helpers
import { ICONS_FONT } from "../helpers/helpers.styles";

//Assets
import { CameraIcon, VideoIcon, PictureIcon, MapIcon } from "../icons/icons";

//Components
import PrimaryButton from "./PrimaryButton";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function HomeFeed({ children: post }: Props) {
  const { darkmode } = useThemeContext();

  return (
    <section
      className={`box-col justify-center my-16 mx-2 w-full md:w-3/5 py-2 2xl:w-3/6`}
    >
      <div
        className={`box-col justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md ${
          darkmode ? "bg-dark-tertiary" : "bg-light-tertiary"
        }`}
      >
        <fieldset className="w-full">
          <input
            type="text"
            placeholder="Nova publicação"
            className={`py-2 px-2 h-full w-full transition-colors ${
              darkmode ? "bg-dark-tertiary" : "bg-light-tertiary"
            } focus:placeholder-light-primary focus:outline-none `}
          />
        </fieldset>
        <div
          className={`box-row justify-center items-center border-t border-dark-primary w-full `}
        >
          <div
            className={`box-row justify-around items-center  w-full ${
              darkmode
                ? "text-dark-text-secondary"
                : "text-light-text-secondary"
            }`}
          >
            <button className={`box-col py-2 px-4 my-1 rounded-md `}>
              <CameraIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button className={`box-col py-2 px-4 my-1 rounded-md`}>
              <VideoIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button className={`box-col py-2 px-4 my-1 rounded-md`}>
              <PictureIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button className={`box-col py-2 px-4 my-1 rounded-md`}>
              <MapIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
          </div>
        </div>
      </div>

      {post}
      <div className={`box-row justify-center m-4`}>
        <PrimaryButton>Load more</PrimaryButton>
      </div>
    </section>
  );
}
