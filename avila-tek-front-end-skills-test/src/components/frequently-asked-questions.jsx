export const FrequentlyAskedQuestions = () => {
  return (
    <>
      {/* Frequently asked questions */}
      <section className="mt-24 resp:mt-10">
        <h2 className="text-4xl text-center mt-6">
          Frequently asked questions
        </h2>
        <div className="w-[45rem] resp:w-11/12 m-auto text-center text-lg">
          <p className="mt-5 text-xl">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="w-[49rem] resp:w-11/12 m-auto mt-20 flex flex-col items-center">
          <div className="flex gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8">
            <div className="resp:w-11/12">
              <p className="font-semibold text-xl">
                Is there a free trial available?
              </p>
              <p className="mt-4">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized{" "}
                <br className="resp:hidden"></br> 30-minute onboarding call to
                get you up and running as soon as possible.
              </p>
            </div>
            <div className="">
              <img src="/minus-circle.png" className="h-6 cursor-pointer"></img>
            </div>
          </div>
          <div className="flex justify-between gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8 w-full">
            <div>
              <p className="font-semibold text-xl">
                Can I change my plan later?
              </p>
            </div>
            <div className="">
              <img src="/plus-circle.png" className="h-6 cursor-pointer"></img>
            </div>
          </div>
          <div className="flex justify-between gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8 w-full">
            <div>
              <p className="font-semibold text-xl">
                What is your cancellation policy?
              </p>
            </div>
            <div className="">
              <img src="/plus-circle.png" className="h-6 cursor-pointer"></img>
            </div>
          </div>
          <div className="flex justify-between gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8 w-full">
            <div>
              <p className="font-semibold text-xl">
                Can other info be added to an invoice?
              </p>
            </div>
            <div className="">
              <img src="/plus-circle.png" className="h-6 cursor-pointer"></img>
            </div>
          </div>
          <div className="flex justify-between gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8 w-full">
            <div>
              <p className="font-semibold text-xl">How does billing work?</p>
            </div>
            <div className="">
              <img src="/plus-circle.png" className="h-6 cursor-pointer"></img>
            </div>
          </div>
          <div className="flex justify-between gap-7  pb-8 mb-8 w-full">
            <div>
              <p className="font-semibold text-xl">
                How do I change my account email?
              </p>
            </div>
            <div className="">
              <img src="/plus-circle.png" className="h-6 cursor-pointer"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
