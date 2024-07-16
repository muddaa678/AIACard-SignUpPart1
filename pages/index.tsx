import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";

const DesktopSignUp: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.437rem] leading-[normal] tracking-[normal] mq800:gap-[2.188rem] mq450:gap-[1.125rem] mq1300:flex-wrap">
      <div className="w-[46.875rem] box-border flex flex-row items-start justify-start pt-[2.5rem] px-[4.812rem] pb-[1.687rem] min-w-[46.875rem] max-w-full z-[1] border-r-[1px] border-solid border-gray mq800:pt-[1.625rem] mq800:px-[2.375rem] mq800:pb-[1.25rem] mq800:box-border mq1125:min-w-full mq1300:flex-1">
        <img
          className="h-[43rem] flex-1 relative max-w-full overflow-hidden object-cover mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/screenshot-20240714-at-31226am-1@2x.png"
        />
        <div className="h-[47.188rem] w-[46.875rem] relative box-border hidden max-w-full border-r-[1px] border-solid border-gray" />
      </div>
      <div className="w-[33.875rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3rem] box-border min-w-[33.875rem] min-h-[43.75rem] max-w-full mq800:pb-[1.938rem] mq800:box-border mq800:min-w-full mq1300:flex-1">
        <FrameComponent />
      </div>
    </div>
  );
};

export default DesktopSignUp;
