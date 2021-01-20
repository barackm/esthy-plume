import React from "react";
import Lottie from "react-lottie";
import * as done from "./done.json";
import * as loading from "./loading2.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserverAspectRatio: "xMidYMid slice",
  },
};
const defaultOptionsDone = {
  loop: false,
  autoplay: true,
  animationData: done.default,
  rendererSettings: {
    preserverAspectRatio: "xMidYMid slice",
  },
};
let isLoading = true;
setTimeout(() => {
  isLoading = false;
}, 3000);
export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Lottie options={defaultOptions} height={120} width={120} />
      ) : (
        <Lottie options={defaultOptionsDone} height={120} width={120} />
      )}
    </div>
  );
}
