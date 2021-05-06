import React from "react";
import "../assets/styles/components/_bar.scss";

const Bar = ({ dates }) => {
  const prueba = (title) => (
    <p className="bar__blue--refresh">Refreshed {title}</p>
  );

  const renderDates = () => {
    if (dates?.last_updated) {
      const date = new Date(dates.last_updated);
      const formatedDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
      return prueba(formatedDate);
    }
    return null;
  };

  const renderTitles = () => {
    if (dates?.status?.apis) {
      return dates?.status?.apis.map((item) => {
        console.log(item);
        if (item.tracking) {
          return prueba(item.tracking.title);
        }
        return prueba(item.authenticacion.title);
      });
    }
    return null;
  };

  return (
    <section className="bar">
      <div className="bar__blue">
        <span className="bar__blue--circle"></span>
        <p className="bar__blue--all">All systems operational</p>
        {renderDates()}
      </div>
    </section>
  );
};

export default Bar;
