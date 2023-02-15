import { GetServerSideProps,GetStaticProps } from "next"
import { Proto } from "api/protocol"
import { makeDummyHome, makeDummySearchView } from "../mock/mock"
import Link from "next/link"

// export const getStaticProps: GetStaticProps = async () => {

//   const data = makeDummySearchView("")
//   console.log("props")
//   return{
//     props: {...data },
//   }
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetch('http://153.126.185.116:18080/api/home').then(res => {
    return res.text()
  })
  //const data = makeDummyHome()
  console.log("aaaaaaa:",data)
  return{
    props: {data},
  }
}

export default function Home(props: {data: Proto.IHomeView}) {
  console.log(props.data)
  return (
    <div>
      <p>ここは通る</p>
      {props.data?.titlesByTag?.map((v,i) => (
        <div key={i}>
          <p>{v.tag?.name}</p>
          <div>{v.titles?.map(title => <Link href={'/title/'+title.id} key={title.id}>{title.name}</Link>)}</div>
        </div>))}
      {/* <div>
        {props.data?.titlesByTag}
      </div> */}
    </div>
  )
}
