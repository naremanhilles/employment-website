import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="number">404</h1>
      <p className="oops">الصفحة الرئيسية غير موجودة... !</p>
      <br />
      <Link to="/" className="go-back">
        عد لصفحة الرئيسية
      </Link>
    </div>
  );
}
