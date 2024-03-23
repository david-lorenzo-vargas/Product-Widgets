import { ReactElement, useMemo } from "react";

const Tooltip = ({
  children,
  position,
}: Props): ReactElement => {
  const tipPossition = useMemo(() => {
    if (position === 'bottom') {
      return 'top-full'
    } else if (position === 'top') {
      return 'bottom-full'
    } else if (position === 'right') {
      return 'left-full'
    } else if (position === 'left') {
      return 'right-full'
    } else if (position === 'bottom-left') {
      return 'top-full right-0'
    } else if (position === 'top-left') {
      return 'bottom-full right-0'
    } else {
      return 'bottom-full left-0'
    }
  }, [position]);

  return (
    <div
      className={`
        absolute
        w-max
        shadow-lg
        ${tipPossition}
        animate-tooltip
      `}
    >
      <div>
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: ReactElement;
  position: 'top' | 'bottom' | 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'top-left'
}

export default Tooltip;
