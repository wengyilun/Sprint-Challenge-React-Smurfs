import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom'

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${props.id}`}>
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
      </Link>
      <FontAwesomeIcon icon="faTimes"/>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

