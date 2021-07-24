export const getData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(res.status);
  }

  const data = await res.json();
  return data;
};
