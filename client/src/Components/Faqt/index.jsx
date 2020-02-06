import React, { Component } from 'react';
import SupportBtn from '../CommonComponents/SupportBtn/index';
import './style.css';
import Sin from './Sin/index';

export default class Privacy extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const qustionsData = this.props.location.state.detail;
    const newData = [{ id: 0, qustions: [] }];
    qustionsData.forEach(qustion => {
      newData[newData.length - 1].qustions.push(qustion);
    });
    this.setState({ data: newData });
  }

  render() {
    const { data } = this.state;

    // eslint-disable-next-line react/prop-types
    return (
      <div className="main-container">
        <div className="container">
          <SupportBtn
            mb_class="true"
            page_title={this.props.location.state.title}
            title_icon="fa fa-question-circle"
            paragraph="اختر الموضوع المناسب لتظهر لك التوضيحات بشأنه
"
          />
          {data.map(({ id, qustions }) => (
            <div key={id}>
              <Sin data={qustions} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
