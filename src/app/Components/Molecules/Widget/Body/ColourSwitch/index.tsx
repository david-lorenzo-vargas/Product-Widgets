import { ReactElement, useContext } from "react";

import Button from "@/app/Components/Atoms/Button";

import { WidgetSelectedColorEnum } from "@customTypes/types";

import { AppContext } from "@/app/Components/Organisms/ProductWidgets";

const ColourSwitch = ({
  id,
  colourSelected
}: Props): ReactElement => {
  const { onSelectColour } = useContext(AppContext);

  const colours = Object.values(WidgetSelectedColorEnum);

  return (
    <div className="flex flex-row items-center justify-between">
      <span className="font-cabin text-green text-sm">
        Badge colour
      </span>
      <div className="-mx-2 flex flex-row items-center">
        {colours.map((c: string) => (
          <div className="px-2" key={c}>
            <Button
              size="h-16 w-16"
              id={`${id}-${c}`}
              type="button"
              bgColour={`bg-${c}`}
              selected={colourSelected === c}
              onClick={() => onSelectColour(id, WidgetSelectedColorEnum[c as keyof typeof WidgetSelectedColorEnum])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  id: number;
  colourSelected: WidgetSelectedColorEnum;
}

export default ColourSwitch;
