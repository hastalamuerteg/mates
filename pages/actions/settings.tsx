//Next
import Image from "next/image";
import { GetStaticProps } from "next";
import useSWR from "swr";

//Components
import Layout from "../../components/Layout";
import AccountSettingsOptionEdition from "../../components/AccountSettingsOptionEdition";
import PrimaryButton from "../../components/PrimaryButton";

//Assets
import profile from "../../assets/profile.jpg";

//Services
import { apiGetBrazilStates } from "../../services/apiService";
import { IBGE_STATES } from "../../services/httpService";

//Types
import { IStates } from "../../types/states";

//Context
import { useThemeContext } from "../../Contexts/ThemeProvider";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getStaticProps: GetStaticProps = async () => {
  const data = await apiGetBrazilStates();
  return {
    props: {
      data,
    },
  };
};

export default function Settings({ data }: { data: IStates[] }) {
  const { background, primaryColor, tertiaryColor } = useThemeContext();

  const { data: states, error } = useSWR(IBGE_STATES, apiGetBrazilStates, {
    initialData: data,
  });

  if (error) {
    return <div className={`box-col justify-center items-center`}>error</div>;
  }
  return (
    <Layout>
      <div
        className={`box-col justify-start items-start md:flex md:flex-row md:justify-center md:items-center h-screen w-full mx-auto`}
      >
        <div
          className={`box-col justify-start items-center p-4 mx-2 mt-16 w-full md:w-1/2 h-auto`}
        >
          <div className={`block text-left w-full m-4 text-${primaryColor}`}>
            <h2 className={`font-semibold`}>Profile settings</h2>
          </div>
          <picture className={`box-col`}>
            <Image
              alt="profile picture"
              src={profile}
              width={90}
              height={90}
              className="rounded-full"
            />
            <small className="my-1 cursor-pointer">Change photo</small>
          </picture>
          <div className={`box-col text-${primaryColor} w-full mt-4 px-4`}>
            <form action="">
              <fieldset>
                <label htmlFor="username" className={`mt-2`}>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={`py-1 px-2 w-full border-b border-opacity-35 bg-${background} active:bg-${background} transition-colors focus:placeholder-${primaryColor} focus:outline-none`}
                />
                <label htmlFor="birthday" className={`mt-2`}>
                  Birthday
                </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className={`py-2 px-2 w-full border-b border-opacity-35 bg-${background} transition-colors focus:placeholder-${primaryColor} focus:outline-none`}
                />
                <label htmlFor="location" className={`mt-2`}>
                  Location
                </label>
                <select
                  name="location"
                  id="location"
                  className={`py-2 px-2 w-full border-b border-opacity-35 bg-${background} transition-colors focus:placeholder-${primaryColor} focus:outline-none`}
                >
                  {error && <option>Failed to load states</option>}
                  {!error &&
                    states.map((state: IStates) => (
                      <option value={state.nome} key={state.id}>
                        {state.nome}
                      </option>
                    ))}
                </select>
              </fieldset>
            </form>
            <div className={`box-row justify-center m-4`}>
              <PrimaryButton backgroundColor={`bg-${primaryColor}`}>
                Save
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div
          className={`box-col justify-start items-center p-4 mx-2 mt-16 w-full h-auto md:w-1/2 md:h-5/6 md:overflow-y-scroll bg-${tertiaryColor} shadow-lg rounded-xl`}
        >
          <div className={`box-col w-full h-auto mb-16 md:mb-0 `}>
            <div className={`block text-left w-full my-4 text-${primaryColor}`}>
              <h2 className={`font-semibold`}>Account settings</h2>
            </div>
            <AccountSettingsOptionEdition
              title="Security and login"
              buttonTitle="Edit"
              actionType="Default"
            >
              Change your password and login preferences
            </AccountSettingsOptionEdition>

            <AccountSettingsOptionEdition
              title="Email"
              actionType="Default"
              buttonTitle="Edit"
            >
              Change your email address linked to this account
            </AccountSettingsOptionEdition>

            <AccountSettingsOptionEdition
              title="Public posts"
              buttonTitle="Edit"
              actionType="Default"
            >
              Manage who can follow you and see your content
            </AccountSettingsOptionEdition>

            <AccountSettingsOptionEdition
              title="Delete personal data"
              actionType="Warning"
              buttonTitle="Delete"
            >
              This option will delete all your personal data like images, videos
              and personal preferences
            </AccountSettingsOptionEdition>

            <AccountSettingsOptionEdition
              title="Delete account"
              actionType="Warning"
              buttonTitle="Delete"
            >
              This option will delete your whole account along with all your
              data such as images and videos. This action cannot be reversed
            </AccountSettingsOptionEdition>

            <div className={`block text-left w-full my-4 text-${primaryColor}`}>
              <h2 className={`font-semibold`}>Support</h2>
            </div>
            <AccountSettingsOptionEdition
              title="Terms of service"
              actionType="Default"
              buttonTitle=">"
            />

            <AccountSettingsOptionEdition
              title="Data policy"
              actionType="Default"
              buttonTitle=">"
            />

            <AccountSettingsOptionEdition
              title="About"
              actionType="Default"
              buttonTitle=">"
            />

            <AccountSettingsOptionEdition
              title="Help/FAQ"
              actionType="Default"
              buttonTitle=">"
            />
            <AccountSettingsOptionEdition
              title="Contact us"
              actionType="Default"
              buttonTitle=">"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
