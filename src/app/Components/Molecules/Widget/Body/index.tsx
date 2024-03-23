import { ReactElement } from "react";

import LinkToPublicProfile from "./LinkToPublicProfile";
import Activate from "./Activate";
import ColourSwitch from "./ColourSwitch";

import { WidgetSelectedColorEnum } from "@customTypes/types";

const Body = ({
  id,
  linked,
  active,
  colourSelected,
  index,
}: Props): ReactElement => {
  return (
    <div className="pt-10">
      <div className="mb-10">
        <LinkToPublicProfile id={id} linked={linked} index={index} />
      </div>
      <div className="mb-10">
        <ColourSwitch id={id} colourSelected={colourSelected} />
      </div>
      <div>
        <Activate id={id} active={active} />
      </div>
    </div>
  );
};

interface Props {
  id: number;
  linked: boolean;
  active: boolean;
  colourSelected: WidgetSelectedColorEnum;
  index: number;
}

export default Body;
