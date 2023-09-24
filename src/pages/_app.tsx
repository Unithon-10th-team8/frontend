import "@/styles/globals.css";
import "react-circular-progressbar/dist/styles.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { AppLayout, Navbar, ToastProvider } from "@/components";
import { useRouter } from "next/router";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <SWRConfig>
      <AppLayout>
        <Component {...pageProps} />
        {!router.pathname.startsWith("/signIn") && <Navbar />}
      </AppLayout>
      <ToastProvider />
    </SWRConfig>
  );
}
