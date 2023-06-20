import React, { useEffect, useState } from "react";
import logo from "../assets/images/svg/logo.svg";

function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "9999" }}
          className="bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <div class=" d-flex justify-content-center align-items-center">
            {/* <img className="pre_loading_logo" src={logo} alt="logo" /> */}
            <div id="preloader">
              <div id="loader"></div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;
