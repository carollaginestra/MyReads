import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from '../../components/BookShelf'
import Header from '../../components/Header'

class MainPage extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        moveTo: PropTypes.func.isRequired
    }

    render() {

        const allBooks = (Books) => {
            const allItems = new Map();
            allItems.set('currentlyReading', { title: 'Currently Reading', books: [] })
            allItems.set('wantToRead', { title: 'Want To Read', books: [] })
            allItems.set('read', { title: 'Read', books: [] })
        
            for (let book of Books) {
                const item = allItems.get(book.shelf)
                item.books.push(book)
            }
            return allItems
        }  

        const items = allBooks(this.props.books);

        return (
            <div className="list-books">

                <Header />

                <div className="list-books-content">
                    <div>
                        {[...items].map(([key, item]) =>
                            <BookShelf
                                key={key}
                                title={item.title}
                                books={item.books}
                                moveTo={this.props.moveTo}
                            />
                        )}
                    </div>
                </div>
        
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainPage

