import React from "react";
import './count.css';

const CountComponent = (props) => {
    let counter = props.count;
    return(
      <div className='count'>
          <p>Total users count: {counter}</p>
      </div>
    );
};

export default CountComponent;