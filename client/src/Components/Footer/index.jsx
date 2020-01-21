import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span> مدير المشاريع™ 2020 ©</span>
        <ul id="footer_links">
          {' '}
          <li>
            <a href="/">الخصائص والمميزات</a>
          </li>{' '}
          <li>
            <a href="/">مركز المساعدة</a>
          </li>{' '}
          <li>
            <a href="/">سياسة الخصوصية</a>
          </li>{' '}
          <li>
            <a href="/">الشروط والأحكام</a>
          </li>{' '}
          <li>
            <a href="/">اتصل بنا</a>
          </li>{' '}
        </ul>
      </div>
    </footer>
  );
}
