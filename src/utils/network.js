export const getData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}`);
  }

  const data = await res.json();
  return data;
};
