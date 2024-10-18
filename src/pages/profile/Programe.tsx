
import Hero from "../../component/ProfilePages/program/Hero";
import Level from "../../component/ProfilePages/program/Level";

const Programe = () => {
  return (
    <section className=" min-h-[150vh]">
      <Hero />
      <div className="px-4 sm:px-6 md:px-8">
        <div className=" flex justify-between gap-3 flex-wrap my-4 sm:my-6 ">
          <Level />
          <div className="p-4 rounded-md border-red border w-full sm:w-[24rem]  shadow-xl flex items-center flex-col gap-2">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
            >
              <path
                d="M42.3845 26.036C42.797 22.4124 42.0991 18.749 40.3831 15.5309C38.6672 12.3127 36.0141 9.69179 32.7754 8.0151C29.5367 6.3384 25.865 5.68506 22.2467 6.14161C18.6284 6.59816 15.2341 8.14305 12.5133 10.5717C9.79259 13.0003 7.87377 16.1982 7.01097 19.7416C6.14817 23.2851 6.38211 27.0071 7.6818 30.4147C8.98149 33.8223 11.2856 36.7546 14.289 38.8235C17.2925 40.8924 20.8535 42.0001 24.5005 42M18.5005 20H18.5205M30.5005 20H30.5205"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.5 30C20.816 31.344 22.62 32 24.5 32C24.9267 32 25.3467 31.9667 25.76 31.9M32.5 44L42.5 34M42.5 34V43M42.5 34H33.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* title */}
            <h2 className="text-dark text-3xl font-medium ">Total Referrals</h2>
            <span className="text-dark text-5xl font-medium ">22</span>
          </div>
          <div className="p-4 rounded-md border-red border  w-full sm:w-[24rem]  shadow-xl flex items-center flex-col gap-2">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
            >
              <path
                d="M42.3845 26.036C42.797 22.4124 42.0991 18.749 40.3831 15.5309C38.6672 12.3127 36.0141 9.69179 32.7754 8.0151C29.5367 6.3384 25.865 5.68506 22.2467 6.14161C18.6284 6.59816 15.2341 8.14305 12.5133 10.5717C9.79259 13.0003 7.87377 16.1982 7.01097 19.7416C6.14817 23.2851 6.38211 27.0071 7.6818 30.4147C8.98149 33.8223 11.2856 36.7546 14.289 38.8235C17.2925 40.8924 20.8535 42.0001 24.5005 42M18.5005 20H18.5205M30.5005 20H30.5205"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.5 30C20.816 31.344 22.62 32 24.5 32C24.9267 32 25.3467 31.9667 25.76 31.9M32.5 44L42.5 34M42.5 34V43M42.5 34H33.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* title */}
            <h2 className="text-dark text-3xl font-medium ">Total Referrals</h2>
            <span className="text-dark text-5xl font-medium ">22</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programe;
