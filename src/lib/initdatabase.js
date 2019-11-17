
import _ from 'lodash'
import faker from 'faker'
import { createStore } from 'redux'
import axios from 'axios'


const Initdatabase= () => { 
  axios({
    method: 'get',
    // url: 'http://www.google.com/maps/d/u/0/kml?forcekml=1&mid=10SCYSkgC9KMC_kAGtLChlGRLWVbk8NTs'
    url: 'https://jsonplaceholder.typicode.com/todos/1'
    // responseType: 'stream'
  }).then(function (response) {
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



 return   _.times(30, () => ({
      title: faker.company.companyName(),
      // name: faker.company.companyName(),
      source: faker.company.catchPhrase(),
      result: faker.company.bsBuzz(),
      info: faker.finance.amount(0, 100, 2, '$'),
    }))

}

export default Initdatabase