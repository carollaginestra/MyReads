import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book extends Component {

    static propTypes = {
        book: PropTypes.array.isRequired,
    }

    options = [
        { key: 'currentlyReading', title: 'Currently Reading' },
        { key: 'wantToRead', title: 'Want to Read' },
        { key: 'read', title: 'Read' },
        { key: 'none', title: 'None' }
    ]


    render() {

        const { title, authors, imageLinks } = this.props.book
        const cover = imageLinks ? imageLinks.smallThumbnail : ''


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
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

export default Book