import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hook/useCollection';

import { useAuthContext } from '../hook/useAuthContext';

export default function Home() {

  const { user } = useAuthContext()

  // its 'documents', but this component sees it as 'book' - LOL like that also can
  const { documents: books } = useCollection(
    'books',
    ['uid', '==', user.uid]
  )

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
