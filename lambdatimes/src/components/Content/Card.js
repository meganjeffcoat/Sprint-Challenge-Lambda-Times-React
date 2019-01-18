import React from 'react';
import PropTypes from 'prop-types';

import Cards from './Cards';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.PropTypes = {
  card:PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab:PropTypes.number,
    author:PropTypes.arrayOf(PropTypes.string)
  })
}

export default Card;
