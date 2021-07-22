import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '@components/Header';
import BooksList from '@components/BooksList';
import BookDescription from '@components/BookDescription';
import { getData } from '@utils/network';
import { getUrl } from '@utils/getUrl';
import { addBooksData, clearBooksData } from '@store/actions';

import s from './App.module.sass';

function App() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formDataReducer);
  const [numberOfBooks, setNumberOfBooks] = useState(0);
  const url = getUrl(formData);
  useEffect(() => {
    dispatch(clearBooksData());
    getData(url)
      .then((data) => {
        setNumberOfBooks(data.totalItems);
        dispatch(addBooksData(data.items));
      })
      .catch((error) => console.error(error));
  }, [formData]);

  return (
    <BrowserRouter>
      <Header />
      <main className={s.main}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <BooksList numberOfBooks={numberOfBooks} />}
          />
          <Route path="/book/:id" exact component={BookDescription} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
