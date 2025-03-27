import styles from "./page.module.css";
import OurValues from "./OurValues.js";
import OurCrew from "./OurCrew.js";
import OurPartners from "./OurPartners.js";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <OurValues />
        <OurCrew />
        <OurPartners />
      </main>
    </div>
  );
};

export default Crew;
