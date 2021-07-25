//Next Components
import { GetStaticProps } from "next";

//React
import { useState } from "react";

//Components
import SideMenu from "../../components/SideMenu";
import UserCard from "../../components/UserCard";
import TopHeading from "../../components/TopHeading";
import UserCardContainer from "../../components/UserCardContainer";
import Main from "../../components/Main";
import TopMenu from "../../components/TopMenu";

//Services
import { apiGetAllUsers } from "../../services/apiService";

//Types
import { IUsersApi } from "../../types/apiTypes";
import { IUsers } from "../../types/users";
import SearchInput from "../../components/SearchInput";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await apiGetAllUsers();
  return { props: { results } };
};

export default function AllUsers(results: IUsersApi) {
  const [users, setUsers] = useState(results.results);

  function handleFriendSearchInput() {}

  return (
    <>
      <header className="flex w-full">
        <SideMenu />
        <Main>
          <TopMenu />
          <div className="flex justify-between items-center px-6 py-4 my-14 w-full">
            <TopHeading message="Get in touch with your mates" />
            <SearchInput onInputChange={handleFriendSearchInput} />
          </div>
          <UserCardContainer>
            {users.map((user: IUsers) => (
              <UserCard key={user.login.uuid} user={user} />
            ))}
          </UserCardContainer>
        </Main>
      </header>
    </>
  );
}
