import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '@components/Header';
import BooksList from '@components/BooksList';
import BookDescription from '@components/BookDescription';
import { addBooksData, clearBooksData, setErrorApiStatus } from '@store/actions';
import { getData } from '@utils/network';
import { getUrl } from '@utils/getUrl';

import s from './App.module.sass';

function App() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formDataReducer);
  const [numberOfBooks, setNumberOfBooks] = useState(0);
  const [loader, setLoader] = useState(false);
  const url = getUrl({ formData });

  useEffect(() => {
    setLoader(true);
    dispatch(clearBooksData());
    dispatch(setErrorApiStatus({ status: false }))
    getData(url)
      .then((data) => {
        setNumberOfBooks(data.totalItems);
        if (data.totalItems !== 0) {
          dispatch(addBooksData(data.items));
        }
      })
      .catch((error) => {
        console.error(`Could not fetch, ${error}`);
        dispatch(setErrorApiStatus({ status: true, type: error }))
      })
      .finally(() => setLoader(false));
  }, [formData]);

  return (
    <BrowserRouter>
      <Header />
      <main className={s.main}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <BooksList
                numberOfBooks={numberOfBooks}
                loader={loader}
                setLoader={setLoader}
              />
            )}
          />
          <Route path="/book/:id" exact component={BookDescription} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
