import { ReactElement } from "react";

import WidgetHeader from "./WidgetHeader";
import Body from "./Body";

import {
  WidgetActionEnum,
  WidgetSelectedColorEnum,
  WidgetTypeEnum
} from "@customTypes/types";

const Widget = ({
  colour,
  action,
  type,
  amount,
  id,
  linked,
  active,
  index,
}: Props): ReactElement => {
  return (
    <div className="w-full">
      <div className="w-full">
        <WidgetHeader
          action={action}
          subTitle={`${amount}${type === WidgetTypeEnum.carbon ? 'KG' :''} ${type}`}
          bgColour={colour}
        />
      </div>
      <div className="w-full">
        <Body
          id={id}
          linked={linked}
          active={active}
          colourSelected={colour}
          index={index}
        />
      </div>
    </div>
  );
};

interface Props {
  colour: WidgetSelectedColorEnum;
  action: WidgetActionEnum;
  type: WidgetTypeEnum;
  amount: number;
  id: number;
  linked: boolean;
  active: boolean;
  index: number;
}

export default Widget;
