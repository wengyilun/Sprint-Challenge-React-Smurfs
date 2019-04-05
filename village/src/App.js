import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './components/SmurfPage';
import {getSmurfs, addSmurf, deleteSmurf} from './util/api'
import {Route, Link, NavLink, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: null,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    getSmurfs()
      .then(res => this.setState({smurfs: res}))
      .catch(err => console.log('err', err))
  }
  
  addSmurf = (smurf)=>{
    addSmurf(smurf)
      .then(res => {
        this.setState({smurfs:  res})
        console.log('smurf', res)
        this.props.history.push('/')
      })
      .catch(err => console.log('err', err))
  }
    
    deleteSmurf = (id)=>{
        deleteSmurf(id)
            .then(res => {
                this.setState({smurfs:  res})
                this.props.history.push('/')
            })
            .catch(err => console.log('err', err))
    }
  
  render() {
    
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        
            <Route
                exact={true}
                path="/"
                render={(navProps)=> {
                    return <Smurfs {...navProps}
                    smurfs={this.state.smurfs}
                    delete={this.deleteSmurf}
                    />}}/>
    
            <Route
                path="/smurf-form"
                render={(navProps)=>(
                    <SmurfForm {...navProps} addSmurf={this.addSmurf} />
                )}/>
            
            {/*<Route*/}
                {/*path="/smurf/:id"*/}
                {/*render={(navProps)=>(*/}
                    {/*<SmurfPage {...navProps} smurfs={this.props.smurfs} />*/}
                {/*)}/>*/}
            
      </div>
    );
  }
}

export default App;
