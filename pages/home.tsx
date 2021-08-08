import { GetStaticProps } from "next";
import { ReactNode } from "react";
import GoToTopButton from "../components/GoToTopButton";
import HomeFeed from "../components/HomeFeed";
import Layout from "../components/Layout";
import Post from "../components/Post";
import getCachedUsers from "../data/usersData";
import { GLOBAL_CONTAINERS } from "../helpers/helpers.styles";
import { IUsers } from "../types/users";

export const getStaticProps: GetStaticProps = async () => {
  const { results: users } = await getCachedUsers();
  return { props: { users } };
};

interface Props {
  users: IUsers[];
}

export default function Home({ users }: Props) {
  return (
    <>
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} items-center justify-center`}
      >
        <HomeFeed>
          {users.map((user) => (
            <Post user={user} key={user.login.uuid} />
          ))}
        </HomeFeed>
        <GoToTopButton />
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
