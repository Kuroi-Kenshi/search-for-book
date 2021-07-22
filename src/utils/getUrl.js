export const getUrl = (formData, startIndex = 0, ...args) => {
  const id = args[0];
  const API_KEY = process.env.REACT_APP_API_KEY;
  if (formData) {
    const { searchText, category, sortingBy } = formData;
    const url =
      category === 'all'
        ? `https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sortingBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
        : `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${category}&orderBy=${sortingBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`;
    return url;
  } else {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAt4eQ8OyEnL9UDcRh9K-_ftfGvHJTiutg`;
    return url;
  }
};
