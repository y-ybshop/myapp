import { updateSource } from '../actionCreators'
import _ from 'lodash'
import faker from 'faker'
import { combineReducers } from 'redux'




const initialState = {
  
  records: []
  // _.times(30, () => ({
  //   title: faker.company.companyName(),
  //   // name: faker.company.companyName(),
  //   source: faker.company.catchPhrase(),
  //   result: faker.company.bsBuzz(),
  //   info: faker.finance.amount(0, 100, 2, '$'),
  // }))

}

function gettingFromSource(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  // console.log(state)
  // console.log(action)

  switch(action.type){
    case "UPDATE_SOURCE":
      let dummystate = {...state}
      dummystate.records = [...dummystate.records, ...action.records]
      return dummystate
    default:
      return state

  }
}

const rootReducer = combineReducers({
  gettingFromSource
})


export default rootReducer