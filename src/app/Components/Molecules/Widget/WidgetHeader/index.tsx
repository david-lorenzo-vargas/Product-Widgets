import { ReactElement, useMemo } from "react";

import Greenspark from "@/app/Components/icons/Greenspark";

import { WidgetActionEnum, WidgetSelectedColorEnum } from "@customTypes/types";

const WidgetHeader = ({
  bgColour,
  subTitle,
  action,
}: Props): ReactElement => {
  const getBgColour = useMemo(() => {
    if (bgColour === WidgetSelectedColorEnum.green) {
      return 'bg-green';
    } else if (bgColour === WidgetSelectedColorEnum.beige) {
      return 'bg-beige'
    } else if (bgColour === WidgetSelectedColorEnum.black) {
      return 'bg-black';
    } else if (bgColour === WidgetSelectedColorEnum.blue) {
      return'bg-blue';
    } else {
      return 'bg-white';
    }
  }, [bgColour]);

  const getTextColour = useMemo(() => {
    if (bgColour === WidgetSelectedColorEnum.black || bgColour === WidgetSelectedColorEnum.blue || bgColour === WidgetSelectedColorEnum.green){
      return 'text-white';
    } else {
      return 'text-green'
    }
  }, [bgColour]);

  return (
    <div
      className={`
        flex
        flex-row
        items-center
        h-67
        min-w-221
        py-10
        pr-12
        pl-15
        rounded-md
        ${getBgColour}
      `}>
      <div className={`${getTextColour}`}>
        <Greenspark />
      </div>
      <div className="flex flex-col ml-12">
        <span className={`text-xs mb-1 font-cabin ${getTextColour}`}>
          {`This product ${action}`}
        </span>
        <span className={`text-lg font-bold font-cabin ${getTextColour}`}>
          {subTitle}
        </span>
      </div>
    </div>
  );
};

interface Props {
  bgColour: WidgetSelectedColorEnum;
  subTitle: string;
  action: WidgetActionEnum;
}

export default WidgetHeader;
