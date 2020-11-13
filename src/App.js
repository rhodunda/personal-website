import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import asyncComponent from './hoc/asyncComponent/asyncComponent'
// import styles from './App.css'
import Layout from './hoc/layout/Layout'
import './App.css';


// const asyncBlogs = asyncComponent(() => {
//   return import('./containers/Blogs/Blogs')
// })

class App extends Component {
  render () {


    return(
      <div>
          <Layout/>
      </div>
    )
  }
}

export default App;
