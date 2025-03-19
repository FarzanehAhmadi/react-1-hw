import "./OurCrew.css";

const OurCrew = () => {
  const team = [
    {
      img: "/crew/image-anousheh-ansari.png",
      name: "Anousheh Ansari",
      role: "Founder + CEO",
    },
    {
      img: "/crew/image-douglas-hurley.png",
      name: "Douglas Hurley",
      role: "Partner",
    },
    {
      img: "/crew/image-mark-shuttleworth.png",
      name: "Mark Shuttleworth",
      role: "CTO",
    },
    {
      img: "/crew/image-victor-glover.png",
      name: "Victor Glover",
      role: "VP.Strategy",
    },
  ];
  return (
    <section className="crew-section">
      <h2>The crew</h2>
      <div className="crew-container">
        <h2 className="crew-title">Who we are?</h2>
        <p className="crew-description">
          We are a curated team of international experts united by a single
          goal; to create category-defining brands and digital experiences that
          make an impact, shape culture and connect people.
        </p>
        <div className="crew-grid">
          {team.map((member, index) => (
            <div key={index} className="crew-member">
              <img
                className="member-image"
                src={member.img}
                alt={member.name}
              />
              <h3 className="member-name">{member.name}</h3>
              <p className="crew-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurCrew;
