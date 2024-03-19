import { FaArrowRight } from "react-icons/fa";
import "../css/app.css";

export const App = () => {
  return (
    <>
      <div className="mt-[6.60rem] resp:hidden"></div>
      <section>
        <div className="bg-violet-800 m-auto mt-40 resp:mt-0 w-10/12 h-[40rem] rounded-3xl flex flex-col items-center -z-10 resp:w-full resp:rounded-none">
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
          <div className="w-3/5 resp:w-full flex justify-center items-baseline mt-20">
            <img src="/Mockup.png" className=""></img>
          </div>
        </div>
      </section>
      <section className="mt-[30rem] resp:mt-[24rem]">
        <div className="m-auto w-32 text-center text-violet-800 text-lg bg-purple-200/50 rounded-3xl border border-violet-300">
          Integrations
        </div>
        <h2 className="text-4xl resp:text-4xl resp:mx-7 text-center mt-6">
          Get more value from your tools
        </h2>
        <div className="w-[45rem] resp:w-10/12 m-auto text-center text-lg">
          <p className="mt-5">
            Connect your tools, connect your teams. With over 100 apps already
            available in our directory, your team’s favourite tools are just a
            click away.
          </p>
        </div>
        <div className="grid grid-cols-3 resp:flex resp:flex-col resp:items-center gap-[3rem] w-[80rem] resp:w-0 m-auto mt-10">
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/notion.png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Notion integration</h2>
            <p className="mt-2">
              Work faster and smarter by integrating directly with Notion, right
              in the app.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              View Integration <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/slack.png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Slack integration</h2>
            <p className="mt-2">
              Work faster and smarter by integrating directly with Slack, right
              in the app.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              View Integration <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/google_drive.png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Google Drive integration</h2>
            <p className="mt-2">
              Work faster and smarter by integrating directly with Google Drive,
              right in the app.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              View Integration <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/intercom.png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Intercom integration</h2>
            <p className="mt-2">
              Work faster and smarter by integrating directly with Intercom,
              right in the app.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              View Integration <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/jira.png"
              className="border border-neutral-200 shadow drop-shadow-xl rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Jira integration</h2>
            <p className="mt-2">
              Work faster and smarter by integrating directly with Jira, right
              in the app.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              View Integration <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-[24rem]">
            <img
              src="/Icon wrap.png"
              className="border border-neutral-200 rounded-xl p-1"
            ></img>
            <h2 className="mt-3">Notion integration</h2>
            <p className="mt-2">
              Work faster and smarter by integrating directly with Dropbox,
              right in the app.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold text-violet-700 mt-4 cursor-pointer hover:text-violet-900 transition duration-300">
              View Integration <FaArrowRight className="mt-1 font-normal" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-violet-800 m-auto mt-40 w-10/12 resp:w-11/12 h-[27rem] resp:h-[40rem] rounded-3xl flex resp:flex-col justify-between">
          <div className="mx-20 my-32 resp:my-12 resp:mx-7">
            <h2 className="text-white text-4xl">Give us a shot</h2>
            <p className="text-white text-xl mt-5">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-white p-3 font-semibold rounded-lg hover:bg-neutral-200 transition duration-300">
                Learn more
              </button>
              <button className="bg-violet-600 text-white p-3 font-semibold rounded-lg hover:bg-violet-700 transition duration-300">
                Get started
              </button>
            </div>
          </div>
          <img src="/Image.png" className="rounded-r-3xl"></img>
        </div>
      </section>
      <section className="mt-24">
        <div className="m-auto w-24 text-center text-violet-800 text-lg bg-purple-200/50 rounded-3xl border border-violet-300">
          Features
        </div>
        <h2 className="text-4xl text-center mt-6">
          Cutting-edge features for advanced analytics
        </h2>
        <div className="w-[45rem] m-auto text-center text-lg">
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
      <section className="bg-neutral-100/75 mt-20 flex justify-center">
        <div className="p-32">
          <h2 className="text-5xl text-bold z-10">
            No long-term contracts.
            <br />
            No catches.
          </h2>
          <p className="mt-10 text-xl text-neutral-500">
            Start your 30-day free trial today.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-white p-3 font-semibold border border-neutral-200 rounded-lg hover:bg-neutral-200 transition duration-300">
              Learn more
            </button>
            <button className="bg-violet-600 text-white p-3 font-semibold rounded-lg hover:bg-violet-700 transition duration-300">
              Get started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20">
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
      </section>
      <section className="mt-24">
        <h2 className="text-4xl text-center mt-6">
          Frequently asked questions
        </h2>
        <div className="w-[45rem] m-auto text-center text-lg">
          <p className="mt-5 text-xl">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="w-[49rem] m-auto mt-20 flex flex-col items-center">
          <div className="flex gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8">
            <div>
              <p className="font-semibold text-xl">
                Is there a free trial available?
              </p>
              <p className="mt-4">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized <br></br> 30-minute
                onboarding call to get you up and running as soon as possible.
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
          <div className="flex justify-between gap-7 border-b-2 border-neutral-300/75 pb-8 mb-8 w-full">
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
      <section>
        <div className="bg-violet-900 m-auto mt-40 w-10/12 h-[30rem] rounded-3xl flex justify-between">
          <img src="/Image (6).png" className="rounded-l-3xl"></img>

          <div className="mx-16 my-24">
            <img src="/Stars.png"></img>
            <h2 className="text-white text-4xl mt-7">
              Love the simplicity of the service <br></br> and the prompt
              customer support. We can’t imagine working without it.
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
      <section className="mt-40"></section>
    </>
  );
};
