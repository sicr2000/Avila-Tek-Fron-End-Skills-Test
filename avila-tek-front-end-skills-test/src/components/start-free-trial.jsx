export const StartFreeTrial = () => {
  return (
    <>
      {/* Start free trial */}
      <section className="bg-neutral-100/75 mt-20 flex resp:flex-col justify-center">
        <div className="p-32 resp:p-10">
          <h2 className="text-5xl resp:hidden text-bold z-10">
            No long-term contracts.
            <br />
            No catches.
          </h2>
          <h2 className="text-3xl hidden resp:block text-bold z-10">
            No long-term contracts. No catches.
          </h2>
          <p className="mt-10 resp:mt-7 text-xl text-neutral-500">
            Start your 30-day free trial today.
          </p>
          {/* Show on Computer */}
          <div className="mt-10 resp:hidden flex gap-4">
            <button className="bg-white p-3 font-semibold border border-neutral-200 rounded-lg hover:bg-neutral-200 transition duration-300">
              Learn more
            </button>
            <button className="bg-[#7F56D9] hover:bg-[#714dbe] text-white p-3 font-semibold rounded-lg transition duration-300">
              Get started
            </button>
          </div>
          {/* Show on Phone */}
          <div className="mt-10 hidden resp:block resp:flex resp:flex-col resp:gap-3">
            <button className="bg-violet-600 text-white p-3 font-semibold rounded-lg hover:bg-violet-700 transition duration-300">
              Get started
            </button>
            <button className="bg-white p-3 font-semibold border border-neutral-200 rounded-lg hover:bg-neutral-200 transition duration-300">
              Learn more
            </button>
          </div>
        </div>
        {/* Show on Computer */}
        <div className="flex flex-col gap-4 py-20 resp:hidden">
          <div className="flex justify-center gap-4 items-baseline">
            <img src="/Image (1).png" className="h-40"></img>
            <img src="/Image (2).png"></img>
          </div>
          <div className="flex gap-4">
            <img src="/Image (3).png" className="h-40"></img>
            <img src="/Image (4).png"></img>
            <img src="/Image (5).png" className="h-40"></img>
          </div>
        </div>
        {/* Show on Phone */}
        <div className="resp:flex resp:flex-col resp:mb-10 resp:gap-2 py-10 px-6 hidden resp:block">
          <img src="/Image (7).png"></img>
          <img src="/Image (8).png"></img>
          <img src="/Image (9).png"></img>
          <img src="/Image (10).png"></img>
          <img src="/Image (11).png"></img>
        </div>
      </section>
    </>
  );
};
