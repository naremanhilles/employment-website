import React from 'react';
import CountUp from 'react-countup';
import './style.css';

export default function Countup(props) {
  const { stat_title, stat_desc, end } = props;
  return (
    <div className="countup__div">
      <div className="single_stat">
        <CountUp
          start={0}
          delay={3}
          duration={5}
          end={end}
          className="stat_value"
        />
        <div className="stat_title">{stat_title}</div>
        <div className="stat_desc">{stat_desc}</div>
      </div>
    </div>
  );
}
