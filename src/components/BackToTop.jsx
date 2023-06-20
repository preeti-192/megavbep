import React, { useState } from "react";

function BackToTop() {
  const [movetoTop, setMovetoTop] = useState(false);
  const move = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setMovetoTop(true);
    } else {
      setMovetoTop(false);
    }
  });
  return (
    <>
      <div>
        {movetoTop ? (
          <button
            onClick={move}
            className="btn btn_top position-fixed bottom-0 end-0 mb-4 me-3 fc_white z_10"
          >
            <div className="backToTopArrow position-relative">
              <svg
                width="20"
                height="20"
                fill="white"
                class="bi bi-chevron-double-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                ></path>
              </svg>
            </div>
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default BackToTop;
