export const FirstViewGraphic = () => {
  return (
    <>
      {/* First View (Graphic) */}
      <section>
        <div className="bg-violet-800 m-auto mt-40 resp:mt-0 w-10/12 h-[40rem] resp:h-[42rem] rounded-3xl flex flex-col items-center -z-10 resp:w-full resp:rounded-none">
          <div className="text-center mt-20 resp:mt-40">
            <h2 className="text-white text-7xl resp:text-4xl">
              Grow your users.
            </h2>
            <h2 className="text-white text-7xl opacity-80 resp:text-4xl">
              Smarter.
            </h2>
          </div>
          <div className="mt-10 w-3/5 resp:w-11/12 resp:text-xl text-center">
            <p className="text-white">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="mt-5 resp:mt-10">
            <div className="resp:hidden">
              <input
                className="w-[15rem] rounded-lg py-2 px-4"
                placeholder="Enter your email"
              ></input>
              <button className="bg-violet-600 hover:bg-violet-700 transition duration-300 text-white rounded-lg py-3 px-5 ms-3">
                Get started
              </button>
            </div>
            <div className="hidden resp:block mx-5">
              <input
                className="rounded-lg py-3 px-4 w-full"
                placeholder="Enter your email"
              ></input>
              <p className="text-white mt-1">
                We care about your data ir our{" "}
                <a className="cursor-pointer underline hover:text-neutral-300 transition duration-300">
                  privacy policy
                </a>
                .
              </p>
              <button className="w-full bg-violet-600 hover:bg-violet-700 transition duration-300 text-white rounded-lg py-3 px-5 mt-4">
                Get started
              </button>
            </div>
          </div>
          {/* Show on Computer */}
          <div className="w-3/5 resp:hidden flex justify-center items-baseline mt-20">
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
