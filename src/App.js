import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import Loader from './components/Loader/index'
import MainPage from './pages/MainPage/index'
import SearchPage from './pages/SearchPage';
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() =>(
            <MainPage books={this.state.books}/>
          )}/>
          
          <Route path='/search' render={() =>(
            <SearchPage books={this.state.books}  moveTo={this.moveTo}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
