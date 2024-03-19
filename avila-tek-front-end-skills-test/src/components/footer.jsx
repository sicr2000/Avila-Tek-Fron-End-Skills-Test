export const Footer = () => {
  return (
    <footer className="mx-20 resp:mx-5 resp:mt-28 mt-48">
      {/* Show on Computer */}
      <div className="flex justify-between resp:hidden mb-20">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <h2>Product</h2>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Overview
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Features
            </a>
            <div className="flex gap-3">
              <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
                Solutions
              </a>
              <img src="/Badge.png"></img>
            </div>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Tutorials
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Pricing
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Releases
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h2>Company</h2>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              About us
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Careers
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Press
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              News
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Media kit
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Get the app</h2>
          <img
            src="/Mobile app store badge (1).png"
            className="cursor-pointer"
          ></img>
          <img
            src="/Mobile app store badge.png"
            className="cursor-pointer"
          ></img>
        </div>
      </div>
      {/* Show on Phone */}
      <div className="flex justify-between hidden resp:block mb-20">
        {/* Get the app */}
        <div className="flex flex-col gap-3">
          <h2>Get the app</h2>
          <div className="flex gap-3">
            <img
              src="/Mobile app store badge (1).png"
              className="cursor-pointer"
            ></img>
            <img
              src="/Mobile app store badge.png"
              className="cursor-pointer"
            ></img>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="flex flex-col gap-4">
            <h2>Product</h2>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Overview
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Features
            </a>
            <div className="flex gap-3">
              <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
                Solutions
              </a>
              <img src="/Badge.png"></img>
            </div>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Tutorials
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Pricing
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Releases
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h2>Company</h2>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              About us
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Careers
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Press
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              News
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Media kit
            </a>
            <a className="cursor-pointer text-violet-600 hover:text-violet-800 transition duration-300 font-semibold">
              Contact
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center resp:flex-col resp:items-start resp:mt-7">
        <img src="/Logo.png" className="h-12"></img>
        <p className="my-10 resp:my-7">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};
