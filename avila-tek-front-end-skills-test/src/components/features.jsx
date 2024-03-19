import { FaArrowRight } from "react-icons/fa";

export const Features = () => {
  return (
    <>
      {/* Features */}
      <section className="mt-24 resp:mt-44">
        <div className="m-auto w-24 text-center text-violet-800 text-lg bg-purple-200/50 rounded-3xl border border-violet-300">
          Features
        </div>
        <h2 className="text-4xl text-center mt-6 resp:text-3xl resp:mx-7">
          Cutting-edge features for advanced analytics
        </h2>
        <div className="w-[45rem] resp:w-11/12 m-auto text-center text-lg">
          <p className="mt-5">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="grid grid-cols-3 resp:flex resp:flex-col resp:items-center gap-[3rem] w-[80rem] resp:w-0 m-auto mt-16">
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/Featured icon.png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Share team inboxes</h2>
            <p className="mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold mt-4 text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              Learn more <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/Featured icon (1).png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Deliver instant answers</h2>
            <p className="mt-2">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold mt-4 text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              Learn more <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/Featured icon (2).png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Manage your team with reports</h2>
            <p className="mt-2">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold mt-4 text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              Learn more <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
