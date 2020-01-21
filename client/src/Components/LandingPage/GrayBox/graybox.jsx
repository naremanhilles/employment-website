import React from 'react';
import './style.css';

export default function GrayBox(props) {
  const { section_title, section_desc, icon_class, width_class } = props;
  return (
    <div className={`section__div ${width_class ? 'four_col' : ''}`}>
      <div className="dark_section gray__section">
        <i className={icon_class} />
        <br />
        <h3 className="mt-10">{section_title}</h3>
        <div className="section_desc gray__desc">{section_desc}</div>
      </div>
    </div>
  );
}
