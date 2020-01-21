import React from 'react';
import './style.css';

export default function Box(props) {
  const { section_title, section_desc, icon_class } = props;
  return (
    <div className="section__div">
      <div className="dark_section">
        <i className={icon_class} />
        <br />
        <h3 className="mt-10">{section_title}</h3>
        <div className="section_desc">{section_desc}</div>
      </div>
    </div>
  );
}
