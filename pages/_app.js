import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";
import { Provider } from "react-redux";
import store from "../globalRedux/store";

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

      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
      {/* </>
      )} */}
    </>
  );
}

export default MyApp;
