import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import Loader from './components/Loader/index'
import MainPage from './pages/MainPage/index'
import SearchPage from './pages/SearchPage';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books, loading: true })
    })
  }

  moveTo = (book) => {
    BooksAPI.update(book, book.shelf)
    .then(() => {
      this.setState((currentState) => ({
        books: currentState.books.filter((obj) => obj.id !== book.id)
      }))

      if (book.shelf !== 'none')
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
    })
  }

  render() {
    if (this.state.loading === false) { 
      return <Loader />
    } else {
      return (
        <div className="app">
            <Route exact path='/' render={() =>(
              <MainPage
                books={this.state.books}
                moveTo={this.moveTo}
              />
            )}/>
            
            <Route path='/search' render={() =>(
              <SearchPage
                books={this.state.books}
                moveTo={this.moveTo}
              />
            )}/>
        </div>
      )
    }
  }
}

export default BooksApp
