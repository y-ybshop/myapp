import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import DisplayComponent from './DisplayComponent'
import Initdatabase from '../lib/initdatabase'

import { connect } from 'react-redux'

const initialState = { isLoading: false, results: [], value: '' }

// const source = _.times(30, () => ({
//   title: faker.company.companyName(),
//   // name: faker.company.companyName(),
//   source: faker.company.catchPhrase(),
//   result: faker.company.bsBuzz(),
//   info: faker.finance.amount(0, 100, 2, '$'),
// }))


// const source = store.getState()
// console.log(store.getState())

class SearchComponent extends Component {
  
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })


    //search online here 
    setTimeout(() => {


      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })
    }, 300)
  }

  render() {
    // console.log(this)
    const { isLoading, value, results } = this.state
    return (
     <>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            // {...this.props}
          />
          {/* <Grid> */}
          <DisplayComponent 
            results={results}
            />
        {/* <Grid.Column width={6}>
            

            
        </Grid.Column>
        <Grid.Column width={6}>
            
          
            </Grid.Column>
      </Grid> */}
      </>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    source: state.gettingFromSource.records
  }
}

export default connect(mapStateToProps)(SearchComponent)
