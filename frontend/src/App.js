import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends Component {

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.data.hello}</h1>
        </header>
      </div>
    )
  }
}

export default graphql(gql`{hello}`)(App)
