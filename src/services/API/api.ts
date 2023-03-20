// const apiKey = '9c4fe95f21254ac0b4de185a62057a99';
const endPoint = `https://jsonplaceholder.typicode.com/photos?_limit=10`;

export const getRecipes = async () => {
  const data = await fetch(endPoint)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });

  return data;
};
