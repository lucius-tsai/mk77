import "@/styles/global.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/redux/store";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
