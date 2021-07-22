import SideMenu from "../../components/SideMenu";
import { apiGetAllUsers } from "../../services/apiService";
import { IUsers } from "../../types/types";
import { useState } from "react";

export async function getStaticProps() {
  const { results } = await apiGetAllUsers();
  return { props: { results } };
}

export default function AllUsers(results: IUsers) {
  const [] = useState();

  return (
    <>
      <SideMenu>{}</SideMenu>
      {console.log(results)}
    </>
  );
}
