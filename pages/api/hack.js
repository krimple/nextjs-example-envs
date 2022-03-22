const token = process.env.TOKEN;
const apiRoute = process.env.API_ROUTE;

export default async function handler(req, res) {
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    headers: {
      TOKEN: token
    }
  });
  const dogInfo = await response.json();
  console.log(`${token} - ${apiRoute}`);
  res.send(dogInfo);
}
