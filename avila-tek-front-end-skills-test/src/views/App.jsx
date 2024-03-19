import { FirstViewGraphic } from "../components/first-view-graphic";
import { Integrations } from "../components/integrations";
import { GetStartedBanner } from "../components/get-started-banner";
import { Features } from "../components/features";
import { StartFreeTrial } from "../components/start-free-trial";
import { FrequentlyAskedQuestions } from "../components/frequently-asked-questions";
import "../css/app.css";
import { RatingBanner } from "../components/rating-banner";

export const App = () => {
  return (
    <>
      {/* Little space from top */}
      <div className="mt-[6.60rem] resp:hidden"></div>

      <FirstViewGraphic />

      <Integrations />

      <GetStartedBanner />

      <Features />

      <StartFreeTrial />

      <FrequentlyAskedQuestions />

      <RatingBanner />
    </>
  );
};
