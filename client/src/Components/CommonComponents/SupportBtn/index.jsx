import React from 'react';
import './style.css';

export default function supportBtn(props) {
  const { title_icon, page_title, paragraph } = props;
  return (
    <div className="jumbotron inversed no-margin">
      <h2>
        {' '}
        {page_title}
        {paragraph ? (
          <h4 className="sub_title">{paragraph}</h4>
        ) : (
          <>
            <i className={`page_icon_title ${title_icon}`} />
            <a className="support_btn" href="/">
              <i className="fa fa-arrow-left" />
              مركز المساعدة
            </a>{' '}
          </>
        )}
      </h2>
    </div>
  );
}
