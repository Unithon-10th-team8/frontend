type Props = {
  ctaLineOneText?: string;
  ctaLineTwoText?: string;
  ctaButtonText?: string;
  ctaButtonOnClick?: () => void;
};

export const CallToAction = ({
  ctaLineOneText,
  ctaLineTwoText,
  ctaButtonText,
  ctaButtonOnClick,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className=" flex items-center justify-center text-[16px] font-bold leading-[150%]">
          <p className="text-muted">{ctaLineOneText}</p>
        </div>
        <div className="flex items-center justify-center text-[16px] font-bold leading-[150%] text-[#84F44F]">
          <p className="text-muted">{ctaLineTwoText}</p>
        </div>
        <button
          className="mt-[20px] rounded-6  bg-[#444]  px-10 py-6 hover:bg-whiteAlpha-300"
          onClick={ctaButtonOnClick}
        >
          <span>{ctaButtonText}</span>
        </button>
      </div>
    </div>
  );
};
