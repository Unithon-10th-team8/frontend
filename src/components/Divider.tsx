import classNames from "classnames";

export type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={classNames("w-full border-b-1 border-[#434343]", className)}
    />
  );
};
