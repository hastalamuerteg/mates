import { ReactNode } from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <div>Homepage</div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
