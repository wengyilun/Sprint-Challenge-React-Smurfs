import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom'

const SmurfPage = props => {
  // if(!props.smurfs) return <h1>Loading</h1>
  // console.log('props.match.params.id',props.match.params.id)
  // console.log('props.smurfs',props.smurfs)
  // const obj = props.smurfs && props.smurfs.find(el => el.id === props.match.params.id)
  // return (
  //   <div className="Smurf">
  //     <h3>{obj.name}</h3>
  //     <strong>{obj.height} tall</strong>
  //     <p>{obj.age} smurf years old</p>
  //     <FontAwesomeIcon icon="faTimes"/>
  //   </div>
  // );
};
//
// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

export default SmurfPage;

