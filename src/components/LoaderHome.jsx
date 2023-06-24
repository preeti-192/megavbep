import React, { useEffect, useState } from "react";
import logo from "../assets/images/svg/logo.svg";

function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
      document.body.style.overflow = "unset";
    }, 5000);
  }, []);

  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "9999" }}
          className="bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <div class=" d-flex justify-content-center align-items-center flex-column text-center">
            <div class="loader">
              <img className="pre_loading_logo" src={logo} alt="logo" />
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
