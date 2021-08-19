//Components
import ContactMessageBox from "../../components/ContactMessageBox";
import Layout from "../../components/Layout";

//Assets
import SearchInput from "../../components/SearchInput";
import { EditIcon } from "../../icons/icons";

import Image from "next/image";
import start_messaging from "../../assets/start_messaging.png";
//Authentication
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ThemeContext } from "../../Contexts/ThemeProvider";
import { useContext } from "react";

export default function Messages() {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    toggleTheme,
    textPrimary,
  } = useContext(ThemeContext);

  function handleMessageSearch() {}
  return (
    <>
      <section
        className={`box-col justify-between items-start md:flex md:flex-row md:justify-center md:items-center h-screen w-full`}
      >
        <div
          className={`box-col justify-start items-center p-4 pb-16 md:pb-1 w-full h-auto md:w-2/5 md:h-screen md:overflow-x-hidden bg-${tertiaryColor}`}
        >
          <div
            className={`box-row justify-between items-center pt-16 px-2 my-2 w-full text-${textPrimary}`}
          >
            <button className="font-semibold">Edit</button>
            <EditIcon className="cursor-pointer" style={{ fontSize: `20px` }} />
          </div>
          <div className={`block w-full p-2 mt-1 `}>
            <SearchInput
              id="messagesSearchBox"
              onInputChange={handleMessageSearch}
            />
          </div>
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
          <ContactMessageBox />
        </div>
        <div
          className={`hidden md:flex md:flex-col items-center justify-center h-full w-3/5 bg-${background}`}
        >
          <picture>
            <Image
              alt="Boy sending message with his phone around message balloons"
              src={start_messaging}
              width={450}
              height={450}
              className={`transition-all animate-fade_in_up`}
            />
          </picture>
          <p className="inline-block font-bold ">
            Search for a friend and start talking.
          </p>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
Messages.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
