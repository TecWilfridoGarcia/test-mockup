import React from "react";
import puntos from '../../images/puntos.svg';
import './style.css';

export default class Modal extends React.Component {
  render() {
    return <div><img className="icon-toggle" src={puntos} /></div>;
  }
}