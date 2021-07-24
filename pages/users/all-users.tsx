import SideMenu from "../../components/SideMenu";
import { apiGetAllUsers } from "../../services/apiService";
import { IUsersApi } from "../../types/apiTypes";
import UserCard from "../../components/UserCard";
import { GetStaticProps } from "next";
import { useState } from "react";
import { IUsers } from "../../types/users";
import TopMessages from "../../components/TopMessages";
import UserCardContainer from "../../components/UserCardContainer";
import Main from "../../components/Main";
import TopMenu from "../../components/TopMenu";
import MenuItems from "../../components/MenuItems";
import Link from "next/link";
import {
  AllUsersIcon,
  MessageIcon,
  SettingsIcon,
  LogoutIcon,
} from "../../icons/icons";
import { basicGlobalStyles } from "../../helpers/helpers.styles";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await apiGetAllUsers();
  return { props: { results } };
};

export default function AllUsers(results: IUsersApi) {
  const [users, setUsers] = useState(results.results);
  return (
    <>
      <header className="flex w-full">
        <SideMenu />
        <Main>
          {
            <TopMenu>
              {
                <ul className="flex justify-around m-2 w-96 h-auto items-center">
                  {
                    <MenuItems>
                      <Link href="/">
                        <a>
                          {
                            <AllUsersIcon
                              style={{
                                fontSize: `${basicGlobalStyles.iconsSize}`,
                              }}
                            />
                          }
                        </a>
                      </Link>
                    </MenuItems>
                  }
                  {
                    <MenuItems>
                      <Link href="/">
                        <a>
                          {
                            <MessageIcon
                              style={{
                                fontSize: `${basicGlobalStyles.iconsSize}`,
                              }}
                            />
                          }
                        </a>
                      </Link>
                    </MenuItems>
                  }

                  {
                    <MenuItems>
                      <Link href="/">
                        <a>
                          {
                            <SettingsIcon
                              style={{
                                fontSize: `${basicGlobalStyles.iconsSize}`,
                              }}
                            />
                          }
                        </a>
                      </Link>
                    </MenuItems>
                  }
                  {
                    <MenuItems>
                      <Link href="/">
                        <a>
                          {
                            <LogoutIcon
                              style={{
                                fontSize: `${basicGlobalStyles.iconsSize}`,
                              }}
                            />
                          }
                        </a>
                      </Link>
                    </MenuItems>
                  }
                </ul>
              }
            </TopMenu>
          }
          <TopMessages message="People you may know" />
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
