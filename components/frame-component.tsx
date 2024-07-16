import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full text-left text-[2rem] text-white font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.875rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
        <img
          className="h-[3.313rem] w-[12.375rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/ai-analysis-logo-13-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
          <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap mq800:text-[1.625rem] mq450:text-[1.188rem]">
            Sign Up
          </a>
        </div>
      </div>
      <form className="m-0 self-stretch rounded-3xs bg-gray box-border flex flex-col items-start justify-start pt-[2.5rem] pb-[1.125rem] pr-[1.562rem] pl-[2.875rem] gap-[0.75rem] max-w-full border-[0px] border-solid border-gray mq800:pl-[1.438rem] mq800:pt-[1.625rem] mq800:pb-[1.25rem] mq800:box-border">
        <img
          className="w-[33.875rem] h-[33.75rem] relative rounded-3xs hidden max-w-full"
          alt=""
          src="/rectangle-34.svg"
        />
        <h2 className="m-0 relative text-[1.375rem] font-bold font-montserrat text-white text-left z-[1] mq450:text-[1.125rem]">
          Personal Information
        </h2>
        <div className="w-[28.063rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[1.875rem] max-w-full mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] min-w-[8.5rem]">
            <b className="w-[6.875rem] relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left z-[1]">
              First Name
            </b>
            <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
              <div className="h-[3.125rem] w-[13.125rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
              <input
                className="w-[4.813rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
                placeholder="Muddashir"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] min-w-[8.5rem]">
            <b className="w-[6.875rem] relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left z-[1]">
              Last Name
            </b>
            <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.187rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
              <div className="h-[3.125rem] w-[13.063rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
              <input
                className="w-[4rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
                placeholder="Siddique"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="w-[28.063rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.75rem] box-border gap-[0.25rem] max-w-full">
          <b className="w-[6.875rem] relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left z-[1]">
            Email Address
          </b>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.437rem] max-w-full mq450:flex-wrap">
            <div className="flex-1 rounded-8xs box-border flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] min-w-[13.688rem] max-w-full z-[1] border-[2px] border-solid border-darkslategray">
              <div className="h-[3.125rem] w-[21.063rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
              <input
                className="w-[16.563rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block whitespace-nowrap p-0 z-[2]"
                placeholder="muddashir@aianalysisexchange.com"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
              <button className="cursor-pointer [border:none] py-[0.625rem] pr-[0.625rem] pl-[0.687rem] bg-darkslategray rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray-100">
                <div className="h-[2.188rem] w-[5.563rem] relative rounded-8xs bg-darkslategray hidden" />
                <b className="relative text-[0.75rem] inline-block font-montserrat text-white text-center min-w-[4.25rem] z-[2]">
                  Send Code
                </b>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[4.625rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border gap-[0.25rem]">
          <b className="relative text-[0.75rem] font-montserrat text-darkgray text-left z-[1]">
            One-Time Password (OTP)
          </b>
          <div className="flex-1 flex flex-row items-start justify-start gap-[0.225rem]">
            <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
            <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
            <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
            <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
            <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
            <div className="self-stretch w-[2.563rem] relative rounded-8xs box-border z-[1] border-[2px] border-solid border-darkslategray" />
          </div>
        </div>
        <div className="w-[21.063rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0.25rem] max-w-full">
          <b className="w-[6.875rem] relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left z-[1]">
            Password
          </b>
          <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1.375rem] pb-[0.875rem] max-w-full z-[1] border-[2px] border-solid border-darkslategray">
            <div className="h-[3.125rem] w-[21.063rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
            <input
              className="w-[11.75rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
              placeholder="********************************"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full">
          <b className="relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left min-w-[7.25rem] z-[1]">
            Confirm Password
          </b>
          <div className="self-stretch flex flex-row items-end justify-start gap-[0.562rem] max-w-full mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.062rem] box-border min-w-[13.688rem] max-w-full">
              <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[0.812rem] px-[1.375rem] pb-[0.875rem] max-w-full z-[1] border-[2px] border-solid border-darkslategray">
                <div className="h-[3.125rem] w-[21.063rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
                <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[2]">
                  ********************************
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.562rem] pr-[1.75rem] pl-[1.812rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
              <div className="h-[2.25rem] w-[7.813rem] relative rounded-8xs bg-goldenrod hidden" />
              <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-left min-w-[4.25rem] z-[2]">
                Continue
              </b>
            </button>
          </div>
        </div>
      </form>
      <div className="relative text-[0.75rem] text-lightgray">
        <span>
          <span>Don’t have an account?</span>
          <span className="text-darkgray">{` `}</span>
        </span>
        <b className="text-white">Sign Up</b>
      </div>
    </div>
  );
};

export default FrameComponent;
