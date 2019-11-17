import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import SearchExampleStandard from './component/SearchExampleStandard';
import SearchComponent from './component/SearchComponent'
import { connect } from 'react-redux'
import _ from 'lodash'
import faker from 'faker'

import {updateSource} from './actionCreators'
import axios from 'axios'

const Initdatabase= () => { 


 return   _.times(30, () => ({
      title: faker.company.companyName(),
      // name: faker.company.companyName(),
      source: faker.company.catchPhrase(),
      result: faker.company.bsBuzz(),
      info: faker.finance.amount(0, 100, 2, '$'),
    }))

}

class App extends Component {
  componentDidMount() {
    
    axios({
      method: 'get',
      // url: 'http://www.google.com/maps/d/u/0/kml?forcekml=1&mid=10SCYSkgC9KMC_kAGtLChlGRLWVbk8NTs'
      url :'/api/greeting?name=logg',
      // url: '/api'
      // responseType: 'stream'
    }).then((response)=> {
      this.props.onUpdate(
        _.times(30, () => ({
          title: faker.company.companyName(),
          // name: faker.company.companyName(),
          source: faker.company.catchPhrase(),
          result: faker.company.bsBuzz(),
          info: faker.finance.amount(0, 100, 2, '$'),
        }))
      )
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    


  }

  render(){return (
    <div className="App">
      {/* <SearchExampleStandard/> */}
      <SearchComponent/>
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )}
  ;
}

const mapDispatchToProps = dispatch => ({
  onUpdate: records =>{
    // console.log(updateSource(records))
    return dispatch(updateSource(records))
  } 
})

export default connect(null,
  mapDispatchToProps )(App);
