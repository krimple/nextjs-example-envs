export async function getServerSideProps() {
  // needs to be processed during build time - for now using .env.local setting
  console.log(process.env.VERCEL_URL);
  const rootUrl = process.env.VERCEL_URL;
  const response = await fetch(`${rootUrl}/api/hack`);
  const data = await response.text();
  return {
    props: {
      data
    }
  }
}
export default function IndexPage({data}) {

  return (
    <div>
        { data }
    </div>
  )
}
