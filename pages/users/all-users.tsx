//Next Components
import { GetStaticProps } from "next";

//React
import { useState } from "react";

//Components
import UserCard from "../../components/UserCard";
import TopHeading from "../../components/TopHeading";
import UserCardContainer from "../../components/UserCardContainer";

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

type UsersState = any;

export default function AllUsers(results: IUsersApi) {
  const users = results.results;
  const [searchedUsers, setSearchedUsers] = useState<UsersState>(users);

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
        <SearchInput onInputChange={handleFriendSearchInput} />
      </div>
      <UserCardContainer>
        {searchedUsers.map((user: IUsers) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </UserCardContainer>
    </>
  );
}
