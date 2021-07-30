import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

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
    <Auth0Provider domain="" clientId="" redirectUri="">
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
