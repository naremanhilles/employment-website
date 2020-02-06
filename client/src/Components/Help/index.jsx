import React, { Component } from 'react';
import SupportBtn from '../CommonComponents/SupportBtn/index';
import './style.css';

export default class Privacy extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <div className="main-container">
        <div className="container">
          <SupportBtn
            page_title="أهلاً بك فى مركز المساعدة"
            title_icon="fa fa-anchor"
            paragraph="
            مركز المساعدة قد صمم خصيصاً لمساعدتك للوصول لحلول المشاكل و إجابات
            الإستفسارات التى تواجهك. كما يسهل عليك عملية التواصل معنا
          "
          />
          <div className="white_container">
            <div className="page_content">
              <div className="row">
                <div className="col-md-6 text-center">
                  {' '}
                  <div className="single_help_method support">
                    {' '}
                    <a href="/support">
                      {' '}
                      <i className="fa fa-wrench fa-4x" />{' '}
                      <h2 className="i_font">الدعم الفنى</h2>{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="col-md-6 text-center">
                  {' '}
                  <div className="single_help_method faq">
                    {' '}
                    <a href="/faq">
                      {' '}
                      <i className="fa fa-question-circle fa-flip-horizontal fa-4x" />{' '}
                      <h2 className="i_font">الأسئلة الشائعة</h2>{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
              </div>
              <div className="row mt-40 ">
                <div className="col-md-6 text-center">
                  {' '}
                  <div className="single_help_method support">
                    {' '}
                    <a href="https://pmngr.com/general/help/support">
                      {' '}
                      <i className="fas fa-trophy fa-4x" />{' '}
                      <h2 className="i_font">الخصائص والمميزات</h2>{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="col-md-6 text-center">
                  {' '}
                  <div className="single_help_method faq">
                    {' '}
                    <a href="https://pmngr.com/general/help/faq">
                      {' '}
                      <i className="fa fa-envelope fa-flip-horizontal fa-4x" />{' '}
                      <h2 className="i_font">الإتصال بنا</h2>{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
              </div>
              <div className="row mt-40 ">
                <div className="col-md-6 text-center">
                  {' '}
                  <div className="single_help_method support">
                    {' '}
                    <a href="https://pmngr.com/general/help/support">
                      {' '}
                      <i className="fa fa-bullhorn fa-4x" />{' '}
                      <h2 className="i_font">الأمان والخصوصية</h2>{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="col-md-6 text-center">
                  {' '}
                  <div className="single_help_method faq">
                    {' '}
                    <a href="https://pmngr.com/general/help/faq">
                      {' '}
                      <i className="fas fa-shield-alt fa-flip-horizontal fa-4x" />{' '}
                      <h2 className="i_font">الشروط والأحكام</h2>{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
