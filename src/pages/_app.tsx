import "@/styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { AppLayout, Navbar, ToastProvider } from "@/components";

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
