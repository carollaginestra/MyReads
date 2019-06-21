import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object,
        moveTo: PropTypes.func.isRequired,
    }

    shelfOptions = [
        { key: 'currentlyReading', title: 'Currently Reading' },
        { key: 'wantToRead', title: 'Want to Read' },
        { key: 'read', title: 'Read' },
        { key: 'none', title: 'None' }
    ]

    updateShelf = (event) => {
        event.preventDefault()
        const { book } = this.props
        book.shelf = event.target.value
        this.props.moveTo(book)
    }


    render() {

        const { title, authors, imageLinks, shelf } = this.props.book
        const cover = imageLinks ? imageLinks.thumbnail : ''

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover">
                        {cover !== '' ? (
                            <img src={cover} alt={title}/>
                        ) : (
                            <img src={require('../../images/no-cover.jpg')} alt={title}/>
                        )}
                        </div>     
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={this.updateShelf} >
                                <option value="disabled" disabled>Move to...</option>
                                {this.shelfOptions.map(({ key, title }) => (
                                    <option key={key} value={key}>{title}</option>
                                ))}
                            </select>
                        </div>     
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

export default Book