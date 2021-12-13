import Theme from "../styles/theme";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH;
export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
