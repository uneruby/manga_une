import { GetServerSideProps,GetStaticProps } from "next"
import { Proto } from "api/protocol"
import { makeDummyHomeView, makeDummySearchView } from "../mock/mock"
import Link from "next/link"

// export const getStaticProps: GetStaticProps = async () => {

//   const data = makeDummySearchView("")
//   console.log("props")
//   return{
//     props: {...data },
//   }
// }

export const getStaticProps: GetStaticProps = async (context) => {
  // const data = await fetch('http://153.126.185.116:18080/api/home?dormat=json').then(res => {
  //   return makeHomeView(res)
  // })
  const data = makeDummyHomeView()
  //console.log("aaaaaaa:",data)
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
          <div>{v.titles?.map(title => 
                  <div key={title.id}>
                    <Link href={'/title/'+title.id}>{title.name}<br/>
                      <img src={title.thumbnailUrl} alt={"thumbnail"+title.id}></img>
                    </Link>
                    <p>♡{title.likeCount}</p>
                    <p>{title.description}</p>
                  </div>)}
          </div>
          {/* <div>{v.titles?.map(thumbnai => }</div> */}
        </div>))}
      {/* <div>
        {props.data?.titlesByTag}
      </div> */}
    </div>
  )
}
