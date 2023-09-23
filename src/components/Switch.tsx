import classNames from "classnames";
import { useState } from "react";

export type SwitchProps = {
  defaultValue?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

export const Switch = ({ defaultValue, onChange, className }: SwitchProps) => {
  const [enabled, setEnabled] = useState(defaultValue);

  return (
    <button
      onClick={() => {
        setEnabled(!enabled);
        onChange && onChange(!enabled);
      }}
      className={classNames(
        "h-24 w-48 rounded-full bg-[#2B2C30] p-2",
        className,
      )}
    >
      <div
        className={classNames(
          "h-20 w-[22px] rounded-full bg-primary duration-200",
          enabled ? "translate-x-[100%] bg-primary" : "bg-[#565656]",
        )}
      ></div>
    </button>
  );
};
