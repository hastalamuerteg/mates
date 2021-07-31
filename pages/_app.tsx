import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_URL,
} from "../helpers/authConfig";

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
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={AUTH0_URL}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
