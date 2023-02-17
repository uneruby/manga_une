import { GetServerSideProps, GetStaticProps } from "next"
import { Proto } from "api/protocol"
import { makeDummyHomeView, makeDummySearchView } from "../mock/mock"
import Link from "next/link"
import { SearchBar } from "../components/SearchBar"


export const getStaticProps: GetStaticProps = async (context) => {

  //const apiEndPoint = 'http://153.126.185.116:18080/api/home?format=json'
  const response = await fetch('http://153.126.185.116:18080/api/home?format=json')
  const data = await response.json()
  // console.log('---------------------------------------')
  // console.log(response)
  // console.log('---------------------------------------')

  return {
    props: { data },
  }
}

export default function Home(props: { data: Proto.IHomeView }) {
  // console.log(props.data)
  console.table(props)

  // console.log('---------------------------------------')

  // console.log(props.data.titlesByTag)
  // console.log('---------------------------------------')

  // console.log(props.data.titlesByTag.titles[0])
  // console.log('---------------------------------------')

  // console.log(props.data.titlesByTag.titles.likeCount)
  // console.log('---------------------------------------')


  return (
    <div>
      <p>ホーム画面</p>
      <SearchBar />
      {props.data?.titlesByTag?.map((v, i) => (
        <div key={i}>
          <p>{v.tag?.name}</p>
          <div>{v.titles?.map((title) =>
            <div key={title.id}>
              <Link href={"/title/" + title.id}>{title.name}<br />
                <img src={title.thumbnailUrl} alt={"thumbnail" + title.id}></img>
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
