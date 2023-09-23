import "@/styles/globals.css";
import "react-circular-progressbar/dist/styles.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { AppLayout, Navbar, ToastProvider } from "@/components";
import useSignIn from "@/store/useSignIn";

export default function App({ Component, pageProps }: AppProps) {
  const { isSignedIn } = useSignIn();
  return (
    <SWRConfig>
      <AppLayout>
        <Component {...pageProps} />
        {isSignedIn && <Navbar />}
      </AppLayout>
      <ToastProvider />
    </SWRConfig>
  );
}
