// firebase import
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function BookList({ books }) {

  //  delete document 
  const handleClick = async (id) => {
    
    const docRef = doc(db, 'books', id) /* get a specific document */
    await deleteDoc(docRef) /* delete that specific document */

  }
 
  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}