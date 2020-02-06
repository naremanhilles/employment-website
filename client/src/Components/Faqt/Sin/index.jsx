import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const renderCard = data =>
  data.map(({ id, Url, text }) => (
    <div className="single_faq_question mb-10" key={id}>
      <a href={Url}>{text}</a>
    </div>
  ));

const Cards = ({ data }) => {
  return renderCard(data);
};
Cards.defaultProps = { data: [] };

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      fullName: PropTypes.string,
      profession: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Cards;
