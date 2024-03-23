import { ReactElement } from "react";

import CheckMark from "../../icons/CheckMark";

const CheckBox = ({
  size,
  boxId,
  label,
  checked,
  onClick,
}: Props): ReactElement => {
  return (
    <div className="relative group/checkbox">
      <div
        className={`
          rounded
          border
          flex
          flex-row
          items-center
          justify-center
          ${size ? size : 'h-10 w-10'}
          ${checked ? 'bg-green border-green' : 'bg-white border-2 border-black'}
        `}
      >
        {label && (
          <span className={`${checked ? 'text-white' : ''}`}>
            {label}
          </span>
        )}
        {checked && !label && (
          <div className="text-white">
            <CheckMark size="12"/>
          </div>
        )}
      </div>
      {!checked && (
        <div
          className={`
            ${size ? size : 'h-10 w-10'}
            rounded-full
            p-15
            group-hover/checkbox:bg-green
            group-hover/checkbox:bg-opacity-40
            absolute
            -top-6
            -left-6
          `}
        />
      )}
      <input
        type="checkbox"
        name={boxId}
        id={boxId}
        onClick={onClick}
        className={`
          absolute
          top-0
          h-10
          w-10
          cursor-pointer
          opacity-0
          ${size ? size : 'h-10 w-10'}
        `}
        defaultChecked={checked}
        aria-label={boxId}
      />
    </div>
  );
};

interface Props {
  size?: string;
  boxId: string;
  label?: string;
  checked: boolean;
  onClick?: () => void;
}

export default CheckBox;
