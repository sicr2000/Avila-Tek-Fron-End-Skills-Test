export const RatingBanner = () => {
  return (
    <>
      {/*Rating Banner */}
      <section>
        <div className="bg-violet-900 m-auto mt-40 resp:mt-20 w-10/12 h-[30rem] resp:h-[46rem] rounded-3xl flex resp:flex-col justify-between">
          <img
            src="/Image (6).png"
            className="sm:rounded-l-3xl resp:rounded-t-3xl "
          ></img>
          <div className="mx-16 my-24 resp:mt-10 resp:mx-7">
            <img src="/Stars.png"></img>
            <h2 className="text-white text-4xl resp:text-2xl mt-7">
              Love the simplicity of the service{" "}
              <br className="resp:hidden"></br> and the prompt customer support.
              We can’t imagine working without it.
            </h2>
            <p className="text-white text-xl font-semibold mt-10">
              — Renee Wells
            </p>
            <p className="text-white/75 text-xl mt-1">
              Product Designer, Quotient
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
