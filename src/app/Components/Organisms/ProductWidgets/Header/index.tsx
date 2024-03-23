import { ReactElement } from "react";

const Header = (): ReactElement => {
  return (
    <div className="w-full border-b border-b-2 border-border-Gray pb-2.5">
      <h3 className="text-2xl md:text-3xl font-bold font-cabin text-nowrap text-center md:text-start">
        Per product widgets
      </h3>
    </div>
  );
};

export default Header;
