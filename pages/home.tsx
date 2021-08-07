import { GetStaticProps } from "next";
import { ReactNode } from "react";
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
  console.log(users);

  return (
    <>
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center h-screen`}
      >
        {/* <Post>{}</Post> */}
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
