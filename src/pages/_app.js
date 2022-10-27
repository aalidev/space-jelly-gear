import "@styles/globals.scss";
import { SnipcartProvider } from "use-snipcart/useSnipcart";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnipcartProvider>
        <Component {...pageProps} />
      </SnipcartProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
