import React from "react";
import "../assets/styles/components/_bar.scss";

const Bar = () => (
  <section className="bar">
    <div className="bar__blue">
      <span className="bar__blue--circle"></span>
      <p className="bar__blue--all">All systems operational</p>
      <p className="bar__blue--refresh">Refreshed 12:11:00 UTC-0400</p>
    </div>
  </section>
);

export default Bar;
