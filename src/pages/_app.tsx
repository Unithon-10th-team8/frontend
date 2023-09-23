import "@/styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import AppLayout from "@/components/common/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SWRConfig>
  );
}
