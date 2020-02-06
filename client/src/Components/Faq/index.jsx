import React, { Component } from 'react';
import SupportBtn from '../CommonComponents/SupportBtn/index';
import './style.css';
import { tasks, powers, projects, membershipe } from '../utils/qustions';

export default class Privacy extends Component {
  handelTasks = () => {
    const {
      // eslint-disable-next-line react/prop-types
      history: {
        push,
        location: { state },
      },
    } = this.props;

    return push({
      pathname: '/faq_cat',
      state: { detail: tasks, title: 'المهام' },
    });
  };

  handePowers = () => {
    const {
      // eslint-disable-next-line react/prop-types
      history: {
        push,
        location: { state },
      },
    } = this.props;

    return push({
      pathname: '/faq_cat',
      state: { detail: powers, title: 'الصلاحيات' },
    });
  };

  handelProjects = () => {
    const {
      // eslint-disable-next-line react/prop-types
      history: {
        push,
        location: { state },
      },
    } = this.props;

    return push({
      pathname: '/faq_cat',
      state: { detail: projects, title: 'المشاريع' },
    });
  };

  handelMemberShipe = () => {
    const {
      // eslint-disable-next-line react/prop-types
      history: {
        push,
        location: { state },
      },
    } = this.props;

    return push({
      pathname: '/faq_cat',
      state: { detail: membershipe, title: 'العضوية' },
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <div className="main-container">
        <div className="container">
          <SupportBtn
            page_title="الأسئلة الشائعة "
            paragraph="اختر القسم المناسب للسؤال أو الإستفسار الذى تبحث عنه            "
            title_icon="fa fa-question-circle"
          />
          <div className="white_container">
            <div className="row">
              <div className="col-sm-4 mb-40 nice_font">
                {' '}
                <div
                  className="single_faq_cat text-center"
                  onClick={this.handelTasks}
                >
                  {' '}
                  المهام
                </div>{' '}
              </div>{' '}
              <div className="col-sm-4 mb-40 nice_font">
                {' '}
                <div
                  className="single_faq_cat text-center"
                  onClick={this.handelProjects}
                >
                  {' '}
                  المشاريع
                </div>{' '}
              </div>{' '}
              <div className="col-sm-4 mb-40 nice_font">
                {' '}
                <div
                  className="single_faq_cat text-center"
                  onClick={this.handelMemberShipe}
                >
                  {' '}
                  العضوية
                </div>{' '}
              </div>{' '}
              <div className="col-sm-4 mb-40 nice_font">
                {' '}
                <div
                  className="single_faq_cat text-center"
                  onClick={this.handePowers}
                >
                  {' '}
                  الصلاحيات
                </div>{' '}
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
