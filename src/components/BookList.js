import React from 'react'
import { Link } from 'react-router-dom'
import formatAuthors from '../helpers/formatAuthors'

const Book = ({ book }) => {
    return(
        <li>
            <div>
                <img alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                    <Link to={`/book/${book.id}`}>
                        <h3>{book.volumeInfo.title}</h3>
                    </Link>
                    <p>{formatAuthors(book.volumeInfo.authors)}</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                </div>
            </div>
        </li>
    )
}

const BookList = ({ books }) => {

    if (!books.totalItems) {
        return <div>책 이름을 검색해주세요.</div>
    } else if (books.totalItems === 0){
        return <div>찾고 있는 책이 없습니다.</div>
    } else {
        return (
            <ul>
                {books.items.map(book=> {
                    return <Book book={book} ley={book.id}/>
                })}
            </ul>
        )
    }
}

export default BookList