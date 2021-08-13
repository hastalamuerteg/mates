//Next
import { GetStaticProps } from "next";

//React
import { ReactNode, useRef } from "react";

//Components
import GoToTopButton from "../components/GoToTopButton";
import HomeFeed from "../components/HomeFeed";
import Layout from "../components/Layout";
import Post from "../components/Post";

//Local Data
import getCachedUsers from "../data/usersData";

//Helpers
import { GLOBAL_CONTAINERS } from "../helpers/helpers.styles";

//Types
import { IUsers } from "../types/users";

export const getStaticProps: GetStaticProps = async () => {
  const { results: users } = await getCachedUsers();
  return { props: { users } };
};

interface Props {
  users: IUsers[];
}

export default function Home({ users }: Props) {
  const backToTopHomeRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={backToTopHomeRef}
        className={`${GLOBAL_CONTAINERS.flexRowContainer} items-center justify-center`}
      >
        <HomeFeed>
          {users.map((user) => (
            <Post user={user} key={user.login.uuid} />
          ))}
        </HomeFeed>
        <GoToTopButton onRef={backToTopHomeRef} />
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
