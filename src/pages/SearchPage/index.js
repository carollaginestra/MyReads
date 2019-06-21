import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from '../../components/Book/index'
import * as BooksAPI from '../../utils/BooksAPI'
import Loader from '../../components/Loader'

class SearchPage extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        moveTo: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: [],
        loading: false,
    }

    updateQuery = (query) => {
        query = query.trim()
        this.setState({query, loading: true})

        BooksAPI.search(query).then((books) => {
            if (books.error)
                return []

                return books.map((book) => {
                    const obj = {...book}
                    const results = this.props.books.find(b => b.id === obj.id)
                    book.shelf = results ? results.shelf : 'none'
                    return book
                })
        }).then((books) => {
            this.setState(() => ({
                books,
                loading: false,
            }))
        }).catch(() => {
            this.clearQuery();
        })
    }

    clearQuery = () => {
        this.setState({ books: [], loading: false }) //make the list empty
    }

    render() {
        const { books, loading } = this.state
        const { moveTo } = this.props

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" title="Back" aria-label="Back">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" 
                            onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>


                <div className="search-books-results">

                    {loading && (
                        <Loader />
                    )}


                    {books.length > 0 ? (
                        <div>
                            <div className="result">
                                <b>{books.length}</b> results found.
                            </div>

                            <ol className="books-grid">
                                {books.map((book) => (
                                    <Book key={book.id} book={book} moveTo={moveTo}/>
                                ))}
                            </ol>
                        </div>
                    ): (
                        <div className="results">
                            <b>{books.length}</b> results found.

                            <p>You can try searching for:</p>
                            <p>
                                'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
                                'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics',
                                'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing',
                                'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                                'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson',
                                'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
                                'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics',
                                'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time',
                                'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                            </p>
                        </div>
                    )             
                    }

                </div>
            </div>
        )
    }
}

export default SearchPage