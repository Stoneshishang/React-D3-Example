import React from 'react';

export default function Test(props) {
  return <div onClick = {props.handleClick} >Hello {props.person}</div>
}