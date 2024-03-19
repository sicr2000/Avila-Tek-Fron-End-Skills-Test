export const GetStartedBanner = () => {
  return (
    <>
      {/* Get Started Banner */}
      <section>
        <div className="bg-violet-800 m-auto mt-40 resp:mt-36 w-10/12 resp:w-11/12 h-[27rem] resp:h-[40rem] rounded-3xl flex resp:flex-col justify-between">
          <div className="mx-20 my-32 resp:my-12 resp:mx-7">
            <h2 className="text-white text-4xl">Give us a shot</h2>
            <p className="text-white text-xl mt-5">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="mt-10 flex gap-4 resp:hidden">
              <button className="bg-white p-3 font-semibold rounded-lg hover:bg-neutral-200 transition duration-300">
                Learn more
              </button>
              <button className="bg-violet-600 text-white p-3 font-semibold rounded-lg hover:bg-violet-700 transition duration-300">
                Get started
              </button>
            </div>
            <div className="mt-10 resp:flex resp:flex-col gap-4 hidden resp:block">
              <button className="bg-violet-600 text-white p-3 font-semibold rounded-lg hover:bg-violet-700 transition duration-300">
                Get started
              </button>
              <button className="bg-white p-3 font-semibold rounded-lg hover:bg-neutral-200 transition duration-300">
                Learn more
              </button>
            </div>
          </div>
          <img
            src="/Image.png"
            className="sm:rounded-r-3xl resp:rounded-b-3xl "
          ></img>
        </div>
      </section>
    </>
  );
};
