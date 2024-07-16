import type { NextPage } from "next";

const DesktopSignUp1: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.437rem] leading-[normal] tracking-[normal] text-left text-[0.75rem] text-lightgray font-montserrat mq800:gap-[2.188rem] mq450:gap-[1.125rem] mq1300:flex-wrap">
      <div className="w-[46.875rem] box-border flex flex-row items-start justify-start pt-[2.5rem] px-[4.812rem] pb-[1.687rem] min-w-[46.875rem] max-w-full z-[1] border-r-[1px] border-solid border-gray mq800:pt-[1.625rem] mq800:px-[2.375rem] mq800:pb-[1.25rem] mq800:box-border mq1125:min-w-full mq1300:flex-1">
        <img
          className="h-[43rem] flex-1 relative max-w-full overflow-hidden object-cover mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/screenshot-20240714-at-31226am-1@2x.png"
        />
        <div className="h-[47.188rem] w-[46.875rem] relative box-border hidden max-w-full border-r-[1px] border-solid border-gray" />
      </div>
      <div className="w-[33.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.875rem] box-border min-w-[33.875rem] max-w-full mq800:min-w-full mq1300:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.437rem] max-w-full mq800:gap-[1.188rem]">
          <header className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.437rem] pl-[0rem] gap-[1.25rem] text-left text-[2rem] text-white font-montserrat">
            <img
              className="h-[3.313rem] w-[12.375rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/ai-analysis-logo-13-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap">
                Sign Up
              </a>
            </div>
          </header>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
            <div className="self-stretch rounded-3xs bg-gray box-border flex flex-col items-end justify-start pt-[1.5rem] px-[1.125rem] pb-[1rem] gap-[10.687rem] max-w-full border-[0px] border-solid border-gray mq800:gap-[5.313rem] mq450:gap-[2.688rem]">
              <img
                className="w-[33.875rem] h-[35.063rem] relative rounded-3xs hidden max-w-full"
                alt=""
                src="/rectangle-341.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.875rem] box-border max-w-full">
                <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.562rem] gap-[0.75rem]">
                    <h2 className="m-0 relative text-[1.375rem] font-bold font-montserrat text-white text-left z-[1] mq450:text-[1.125rem]">
                      Pre-Qualification
                    </h2>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2rem] mq800:gap-[1rem] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                          <b className="w-[6.875rem] relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left z-[1]">
                            Age
                          </b>
                          <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
                            <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
                            <input
                              className="w-[4.875rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
                              placeholder="18-65 years"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                          <b className="relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left min-w-[4.313rem] z-[1]">
                            Nationality
                          </b>
                          <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
                            <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
                            <input
                              className="w-[4.125rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
                              placeholder="Sri Lanka"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                          <b className="relative text-[0.75rem] font-montserrat text-darkgray text-left z-[1]">
                            Are you a political person?
                          </b>
                          <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.187rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
                            <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
                            <input
                              className="w-[1.313rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
                              placeholder="No"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                          <b className="relative text-[0.75rem] font-montserrat text-darkgray text-left z-[1]">
                            Country of Residence
                          </b>
                          <button className="cursor-pointer pt-[0.75rem] px-[1.625rem] pb-[0.937rem] bg-[transparent] self-stretch rounded-8xs flex flex-row items-start justify-start z-[1] border-[2px] border-solid border-darkslategray hover:bg-dimgray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-100">
                            <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
                            <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[2]">
                              United Arab Emirates
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full">
                    <b className="relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left min-w-[3.25rem] z-[1]">
                      Address
                    </b>
                    <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] max-w-full z-[1] border-[2px] border-solid border-darkslategray">
                      <div className="h-[3.125rem] w-[29.875rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
                      <input
                        className="w-[23rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block max-w-full p-0 z-[2]"
                        placeholder="123 Dubai Street, Dubai, United Arab Emirates, 0000"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="relative text-[0.75rem] font-montserrat text-lightgray text-right inline-block min-w-[5.813rem] z-[1]">
                    Enter manually
                  </div>
                </form>
              </div>
              <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.562rem] pr-[1.75rem] pl-[1.812rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
                <div className="h-[2.25rem] w-[7.813rem] relative rounded-8xs bg-goldenrod hidden" />
                <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-left min-w-[4.25rem] z-[2]">
                  Continue
                </b>
              </button>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
              <div className="relative">
                <span>
                  <span>Don’t have an account?</span>
                  <span className="text-darkgray">{` `}</span>
                </span>
                <b className="text-white">Sign Up</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSignUp1;
