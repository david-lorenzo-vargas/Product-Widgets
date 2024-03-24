import { ReactElement } from "react";

const Spinner = (): ReactElement => {
  return (
    <div
      className="w-48 h-48 border border-5 border-green rounded-full block border-b-transparent animate-spinner"
      role="progressbar"
    />
  );
};

export default Spinner;
