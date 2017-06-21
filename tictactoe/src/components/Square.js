/**
 * Created by zixiangli on 2017/6/21.
 */

import React from 'react'

function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
