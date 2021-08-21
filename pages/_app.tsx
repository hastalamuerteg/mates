//Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

//Next
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";

//React
import { ReactNode } from "react";

//Authentication
import { UserProvider } from "@auth0/nextjs-auth0";

//Contexts
import { ThemeProvider } from "../Contexts/ThemeProvider";
import { AppProps } from "next/dist/next-server/lib/router/router";

// export default function MyApp({
//   Component,
//   pageProps,
// }: AppLayoutProps): NextComponentType<
//   AppContext,
//   AppInitialProps,
//   AppLayoutProps
// > {
//   const getLayout = Component.getLayout || ((page: ReactNode) => page);
//   return getLayout(
//     <UserProvider>
//       <ThemeProvider>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </UserProvider>
//   );
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
