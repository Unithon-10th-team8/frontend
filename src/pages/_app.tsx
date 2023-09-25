import "@/styles/globals.css";
import "react-circular-progressbar/dist/styles.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { AppLayout, Navbar, ToastProvider } from "@/components";
import { useRouter } from "next/router";
import Head from "next/head";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 user-scalable=no"
        />
      </Head>
      <SWRConfig>
        <AppLayout>
          <Component {...pageProps} />
          {!router.pathname.startsWith("/signIn") && <Navbar />}
        </AppLayout>
        <ToastProvider />
      </SWRConfig>
    </>
  );
}
