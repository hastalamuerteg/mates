//Next Components
import { GetStaticProps } from "next";

//React
import { ReactNode, useState } from "react";

//Types
import { IUsers } from "../../types/users";

//Services
import { apiGetAllUsers } from "../../services/apiService";
import { generateID } from "../../services/idService";

//Components
import UserCard from "../../components/UserCard";
import TopHeading from "../../components/TopHeading";
import UserCardContainer from "../../components/UserCardContainer";
import SearchInput from "../../components/SearchInput";
import Layout from "../../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await apiGetAllUsers();
  return { props: { results } };
};

interface IUsersAPI {
  results: IUsers[];
}

export default function AllUsers(results: IUsersAPI) {
  const users = results.results;
  const [searchedUsers, setSearchedUsers] = useState<Array<IUsers>>(users);

  function handleFriendSearchInput(searchedUser: string): void {
    if (searchedUser.length > 1) {
      const searchedFriends = searchedUsers.filter((user: IUsers) =>
        user.name.first.includes(searchedUser)
      );
      setSearchedUsers(searchedFriends);
    } else {
      setSearchedUsers(users);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between items-center text-center px-6 py-4 my-14 w-full md:flex md:flex-row">
        <TopHeading message="Get in touch with your mates" />
        <SearchInput
          id={generateID()}
          onInputChange={handleFriendSearchInput}
        />
      </div>
      <UserCardContainer>
        {searchedUsers.map((user: IUsers) => (
          <UserCard key={user.login.uuid}>{user}</UserCard>
        ))}
      </UserCardContainer>
    </>
  );
}
AllUsers.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
