import { ReactElement, useContext } from "react";

import { AppContext } from "@/app/Components/Organisms/ProductWidgets";
import ToggleSwitch from "@/app/Components/Atoms/ToggleSwitch";

const Activate = ({
  id,
  active,
}: Props): ReactElement => {
  const { onActivateBadge } = useContext(AppContext);

  return (
    <div className="flex flex-row items-center justify-between">
      <span className="font-cabin text-green text-sm">
        Activate badge
      </span>
      <ToggleSwitch
        onClick={() => onActivateBadge(id)}
        id={id.toString()}
        isChecked={active}
      />
    </div>
  );
};

interface Props {
  id: number;
  active: boolean;
}

export default Activate;
