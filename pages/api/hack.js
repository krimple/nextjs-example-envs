const token = process.env.TOKEN;
const apiRoute = process.env.API_ROUTE;

export default function handler(req, res) {
  console.log(`${token} - ${apiRoute}`);
  res.send(200);
}
