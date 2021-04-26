import React from "react";
import "../assets/styles/components/_upTime.scss";

const UpTime = () => (
  <section className="uptime">
    <div className="uptime__container">
      <div className="uptime__container--p">
        <p className="uptime">UPTIME</p>
        <p className="days">Last 30 days</p>
      </div>
      <div className="uptime__container--sigo sigo">
        <div>
          <p className="app-sigo">Sigo APP</p>
          <div className="circle">
            <span className="circle__circle-up"></span>
            <p className="up">UP</p>
          </div>
        </div>
        <span className="porcentaje">&nbsp;</span>
        <div>
          <p>98%</p>
          <p>Today</p>
        </div>
      </div>
      <hr className="line" />
      <div className="uptime__container--sigo">
        <div>
          <p className="app-sigo">Tracking</p>
          <div className="circle">
            <span className="circle__circle-up"></span>
            <p className="up">UP</p>
          </div>
        </div>
        <div>
          <p>100%</p>
          <p>Today</p>
        </div>
      </div>
      <section className="overall">
        <p className="overall__title">OVERALL UPTIME</p>
        <div className="overall__div">
          <div className="overall__div--des">
            <p>100%</p>
            <p>Last 24 hours</p>
          </div>
          <hr className="vertical" />
          <div className="overall__div--des">
            <p>98.93%</p>
            <p>Last 7 days</p>
          </div>
          <hr className="vertical" />
          <div className="overall__div--des">
            <p>98.83%</p>
            <p>Last 30 days</p>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default UpTime;
