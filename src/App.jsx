import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Cards, Chart, Country} from './components';


class App extends React.Component{
  render(){
    return(
      <>
        <Cards />
        <Country />
        <Chart />
        <Switch>
          // redirect to home if the url is messed up 
          <Redirect to="/" />
        </Switch>
      </>
    )
  }
}
export default App;