import { ReactElement, useCallback, useContext, useState } from "react";

import Button from "@/app/Components/Atoms/Button";
import Tooltip from "@/app/Components/Atoms/Tooltip";
import Info from "@/app/Components/icons/Info";
import CheckBox from "@/app/Components/Atoms/CheckBox";

import { AppContext } from "@/app/Components/Organisms/ProductWidgets";

const LinkToPublicProfile = ({
  id,
  linked,
  index,
}: Props): ReactElement => {
  const [infoIconHovered, setInfoIconHovered] = useState<boolean>(false);

  const { onSetLinked } = useContext(AppContext);

  const onLinkToPublicProfile = useCallback((id: number) => {
    onSetLinked(id);
  }, []);

  return (
    <div className="text-green flex flex-row justify-between">
      <div className="flex flex-row">
        <span className="font-cabin text-green text-sm">
          Link to Public Profile
        </span>
        <div
          className="relative"
          onMouseEnter={() => setInfoIconHovered(true)}
          onMouseLeave={() => setInfoIconHovered(false)}
        >
          <Info />
          {infoIconHovered && (
            <Tooltip
              position={(index + 1) % 3 === 0 ? 'top-left' : 'bottom-right'}
            >
              <div className="bg-white rounded-lg py-24 px-16 h-max max-w-221 flex flex-col items-center justify-center">
                <div className="mb-12 flex flex-row items-center justify-center">
                  <span className="font-cabin text-sm text-black text-center">
                    This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.
                  </span>
                </div>
                <Button
                  type="button"
                  id="ViewPublicProfile"
                  onClick={() => onLinkToPublicProfile(id)}
                >
                  <span className="font-cabin text-green text-sm">
                    View Public Profile
                  </span>
                </Button>
              </div>
            </Tooltip>
          )}
        </div>
      </div>
      <div>
        <CheckBox
          size="h-18 w-18"
          boxId={`checkbox-${id}`}
          checked={linked}
          onClick={() => onLinkToPublicProfile(id)}
        />
      </div>
    </div>
  );
};

interface Props {
  id: number;
  linked: boolean;
  index: number;
}

export default LinkToPublicProfile;
