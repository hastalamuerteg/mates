//Styles
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

//Next
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";

//React
import { ReactNode } from "react";

//Authentication
import { UserProvider } from "@auth0/nextjs-auth0";

export default function MyApp({
  Component,
  pageProps,
}: AppLayoutProps): NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
