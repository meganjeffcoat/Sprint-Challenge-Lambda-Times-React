import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
    return(
      <div
       id={props.tab}
       className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
       onClick={ (e) => props.selectTabHandler(e, props.tab)}
      >
        {props.tab.toUpperCase()}
      </div>  
    );
  }
;

// Make sure you include PropTypes on your props.

Tab.propTypes= {
  tab: PropTypes.string
}

export default Tab;
