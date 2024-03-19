import "../css/app.css";

export const App = () => {
  return (
    <>
      <div className="mt-[6.60rem]"></div>
      <section>
        <div className="bg-violet-900 m-auto mt-40 w-10/12 h-[30rem] rounded-3xl flex flex-col items-center">
          <div className="text-center mt-20">
            <h2 className="text-white text-7xl">Grow your users.</h2>
            <h2 className="text-white text-7xl opacity-80">Smarter.</h2>
          </div>
          <div className="mt-10 w-3/5 text-center">
            <p className="text-white">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="mt-5">
            <div>
              <input className="w-[15rem] rounded-lg"></input>
              <button className="bg-purple-500 text-white rounded-lg p-3 ms-3">Get started</button>
            </div>
            <p className="text-white">
              We care about your data ir our{" "}
              <a className="cursor-pointer ">privacy policy</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
