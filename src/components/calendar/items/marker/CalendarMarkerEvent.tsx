type Props = {
  className?: string;
};

export const CalendarMarkerEvent = ({ className = "" }: Props) => {
  return <div className={`h-[6px] w-[17px] rounded-full ${className}`} />;
};
