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
            <div>
              <div className="new_ticket_btn">
                <a className="section_6_btn " href="/new_ticket">
                  تذكرة جديدة
                  <i className="fas fa-ticket-alt" />
                </a>
              </div>
              <div>
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control datepicker"
                      id="ticket_hash"
                      name="ticket_hash"
                      placeholder="من فضلك أدخل كود التذكرة أو اضغط على الرابط المرسل لبريدك"
                    />
                    <span className="input-group-btn">
                      {' '}
                      <button type="submit" className="btn btn-success">
                        عرض التذكرة
                      </button>{' '}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
