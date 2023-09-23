import "@/styles/globals.css";
import 'react-circular-progressbar/dist/styles.css';
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { AppLayout, Navbar, ToastProvider } from "@/components";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <AppLayout>
        <Component {...pageProps} />
        <Navbar />
      </AppLayout>
      <ToastProvider />
    </SWRConfig>
  );
}
