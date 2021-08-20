//Next
import { GetStaticProps } from "next";

//React
import { useRef } from "react";

//Components
import GoToTopButton from "../components/GoToTopButton";
import HomeFeed from "../components/HomeFeed";
import Layout from "../components/Layout";
import Post from "../components/Post";

//Local Data
import getCachedUsers from "../data/usersData";

//Types
import { IUsers } from "../types/users";

//Authentication
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getStaticProps: GetStaticProps = async () => {
  const { results: users } = await getCachedUsers();
  return { props: { users } };
};

interface Props {
  users: IUsers[];
}

export default withPageAuthRequired(function Home({ users }: Props) {
  const backToTopHomeRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div
        ref={backToTopHomeRef}
        className={`box-row items-center justify-center`}
      >
        <HomeFeed>
          {users.map((user) => (
            <Post user={user} key={user.login.uuid} />
          ))}
        </HomeFeed>
        <GoToTopButton onRef={backToTopHomeRef} />
      </div>
    </Layout>
  );
});
