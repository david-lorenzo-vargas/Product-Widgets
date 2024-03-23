import { useCallback, useEffect, useState } from 'react';

const ToggleSwitch = ({
  id,
  onClick,
  isChecked = false,
}: Props) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  useEffect(() => {
    setChecked(() => isChecked);
  }, [isChecked]);

  const onCheck = useCallback(() => {
    setChecked((c: boolean) => !c);
    onClick();
  }, []);

  return (
    <label
      htmlFor={id}
      className={`
        ${checked ? 'bg-green' : 'bg-lightGray'}
        cursor-pointer
        relative
        w-40
        h-20
        rounded-full
      `}
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        aria-label={`toggle-${id}`}
        checked={checked}
        onChange={onCheck}
      />
      <span
        className={`
          w-2/5
          h-4/5
          bg-white
          absolute
          rounded-full
          left-1
          top-2
          ${checked ? 'left-22' : ''}
          transition-all
          duration-500
          group/toggle
        `}
      >
        {!checked && (
          <div
            className={`
              w-2/5
              h-4/5
              rounded-full
              p-13
              group-hover/toggle:bg-green
              group-hover/toggle:bg-opacity-40
              absolute
              -top-5
              -left-5
              
            `}
          />
        )}
      </span>
    </label>
  );
};

interface Props {
  id?: string;
  onClick: () => void;
  isChecked?: boolean;
}

export default ToggleSwitch;
