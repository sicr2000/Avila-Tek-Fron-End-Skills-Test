export const FirstViewGraphic = () => {
  return (
    <>
      {/* First View (Graphic) */}
      <section>
        <div className="bg-[#53389E] m-auto mt-40 resp:mt-0 w-10/12 h-[40rem] resp:h-[42rem] rounded-3xl flex flex-col items-center -z-10 resp:w-full resp:rounded-none">
          <div className="text-center mt-20 resp:mt-40">
            <h2 className="text-white text-7xl resp:text-4xl">
              Grow your users.
            </h2>
            <h2 className="text-white text-7xl opacity-80 resp:text-4xl">
              Smarter.
            </h2>
          </div>
          <div className="mt-10 w-3/5 resp:w-11/12 text-lg resp:text-xl text-center">
            <p className="text-white">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="mt-5 resp:mt-10">
            {/* Show on Computer */}
            <div className="resp:hidden">
              <div className="flex">
                <div className="flex justify-end items-center">
                  <input
                    className="w-[20rem] rounded-lg py-3 px-4"
                    placeholder="Enter your email"
                  ></input>
                  <img
                    src="/Help icon.png"
                    className="absolute mr-3 cursor-pointer"
                  ></img>
                </div>
                <button className="bg-[#7F56D9] hover:bg-[#714dbe] transition duration-300 text-white rounded-lg py-3 px-5 ms-3">
                  Get started
                </button>
              </div>
              <p className="text-white text-xs mt-1">
                We care about your data in our{" "}
                <a className="cursor-pointer underline hover:text-neutral-300 transition duration-300">
                  privacy policy
                </a>
                .
              </p>
            </div>
            {/* Show on Phone */}
            <div className="hidden resp:block">
              <div className="flex justify-end items-center relative">
                <input
                  className="rounded-lg py-3 px-4 w-full"
                  placeholder="Enter your email"
                ></input>
                <img
                  src="/Help icon.png"
                  className="absolute mr-3 cursor-pointer"
                ></img>
              </div>
              <p className="text-white mt-1">
                We care about your data in our{" "}
                <a className="cursor-pointer underline hover:text-neutral-300 transition duration-300">
                  privacy policy
                </a>
                .
              </p>
              <button className="w-full bg-[#7F56D9] hover:bg-[#714dbe] transition duration-300 text-white rounded-lg py-3 px-5 mt-4">
                Get started
              </button>
            </div>
          </div>
          {/* Show on Computer */}
          <div className="w-4/5 resp:hidden flex justify-center items-baseline mt-20">
            <img src="/Mockup.png" className=""></img>
          </div>
          {/* Show on Phone */}
          <div className="resp:w-full hidden resp:block resp:mt-10">
            <img src="/Mockup (1).png" className="w-full"></img>
          </div>
        </div>
      </section>
    </>
  );
};
