//React
import { ReactNode, useContext } from "react";

//Helpers
import { ICONS_FONT } from "../helpers/helpers.styles";

//Assets
import { CameraIcon, VideoIcon, PictureIcon, MapIcon } from "../icons/icons";

//Components
import PrimaryButton from "./PrimaryButton";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function HomeFeed({ children: post }: Props) {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <section
      className={`box-col justify-center my-16 mx-2 w-full md:w-3/5 py-2`}
    >
      <div
        className={`box-col justify-start items-start w-full px-3 py-2 my-1 rounded-md shadow-md bg-${tertiaryColor}`}
      >
        <fieldset className="w-full">
          <input
            type="text"
            placeholder="Nova publicação"
            className={`py-2 px-2 h-full w-full transition-colors bg-${tertiaryColor} focus:placeholder-${primaryColor} focus:outline-none `}
          />
        </fieldset>
        <div
          className={`box-row justify-center items-center  border-t w-full `}
        >
          <div className={`box-row justify-around items-center  w-full`}>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${secondaryColor} hover:text-${tertiaryColor}`}
            >
              <CameraIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${secondaryColor} hover:text-${tertiaryColor}  `}
            >
              <VideoIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${secondaryColor} hover:text-${tertiaryColor}  `}
            >
              <PictureIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
            <button
              className={`box-col py-2 px-4 my-1 rounded-md transition-all hover:bg-${secondaryColor} hover:text-${tertiaryColor}  `}
            >
              <MapIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
            </button>
          </div>
        </div>
      </div>

      {post}
      <div className={`box-row justify-center m-4`}>
        <PrimaryButton backgroundColor={`bg-${primaryColor}`}>
          Load more
        </PrimaryButton>
      </div>
    </section>
  );
}
