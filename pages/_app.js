import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState();

  // Router.events.on("routeChangeStart", (url) => {
  //   setLoading(true);
  // });

  // Router.events.on("routeChangeComplete", (url) => {
  //   setLoading(false);
  // });
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      {/* <> */}
      <Navbar />
      <Component {...pageProps} />
      {/* </>
      )} */}
    </>
  );
}

export default MyApp;
