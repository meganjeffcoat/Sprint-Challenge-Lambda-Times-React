import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {
        return <Card card={card} />
        })
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.ProTypes = {
  card: PropTypes.shape({
    headline:PropTypes.string.isRequired,
    tab:PropTypes.number,
    author:PropTypes.string
  })
}

export default Cards;