export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/hack");
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
