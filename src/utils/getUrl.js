export const getUrl = (...args) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const funcArgs = args[0];

  if ('id' in funcArgs) {
    const id = funcArgs.id;
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAt4eQ8OyEnL9UDcRh9K-_ftfGvHJTiutg`;
    return url;
  }
  if ('paginationIndex' in funcArgs || 'formData' in funcArgs) {
    const { searchText, category, sortingBy } = funcArgs.formData;
    const startIndex = funcArgs.paginationIndex ? funcArgs.paginationIndex : 0;

    const url =
      category === 'all'
        ? `https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sortingBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
        : `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${category}&orderBy=${sortingBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`;
    return url;
  }
};
