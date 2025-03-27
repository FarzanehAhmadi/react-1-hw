import "./OurValues.css";

const OurValues = () => {
  const values = [
    {
      id: "01",
      title: "Love your craft",
      description:
        "We’re here because we love what we do. It’s our passion, hobby, career, and vocation. We’re looking for others who feel the same way.",
    },
    {
      id: "02",
      title: "Be bold, be humble",
      description:
        "There is no top-down. We lead from the bottom and the edges. Everyone drives. We celebrate ideas over egos, where the best idea wins, regardless of who or where it comes from.",
    },
    {
      id: "03",
      title: "Be better. Always push forward.",
      description:
        "We’re on a tireless pursuit to become better and expect those around us to do the same.",
    },
    {
      id: "04",
      title: "Be a Professional",
      description:
        "There’s important work to be done. Speak up. Be present. Provide value, with honesty and candor.",
    },
  ];
  return (
    <section className="values-section">
      <h2>Our Values</h2>
      <div className="values-container">
        <h2 className="values-title">Rules to live by</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <span className="value-id">{value.id}</span>
              <h1 className="value-title">{value.title} </h1>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurValues;
