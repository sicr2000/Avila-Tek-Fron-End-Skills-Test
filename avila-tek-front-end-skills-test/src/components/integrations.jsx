import { FaArrowRight } from "react-icons/fa";

export const Integrations = () => {
  return (
    <>
      {/* Integrations */}
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
    </>
  );
};
