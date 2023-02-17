import { GetServerSideProps, GetStaticProps } from "next"
import { Proto } from "api/protocol"
import { makeDummyHomeView, makeDummySearchView } from "../mock/mock"
import Link from "next/link"
import { SearchBar } from "../components/SearchBar"


export const getStaticProps: GetStaticProps = async (context) => {

  const response = await fetch('http://153.126.185.116:18080/api/home?format=json')
  const test = await response.json()
  console.log('---------------------------------------')
  console.log(response)
  console.log('---------------------------------------')

  const failed = await fetch('http://153.126.185.116:18080/api/home?format=json').then(res => {
    const data = res.json()
    console.log('---------------------------------------')
    console.log(data)
    console.log('---------------------------------------')

    return data
  }
  )

  console.log('---------------------------------------')
  console.log(failed)
  console.log('---------------------------------------')


  const data = await fetch('http://153.126.185.116:18080/api/home?format=json', { method: "GET" })
    .then(res =>
      res.json()
      //return makeDummyHomeView()
    ).then(data => {
      console.log(data)
      return data
    })
  //console.table(data.titlesByTag)
  // const data = makeDummyHomeView()
  console.log('---------------------------------------')

  console.table(data)
  console.log('---------------------------------------')

  return {
    props: { data },
  }
}

export default function Home(props: { data: Proto.IHomeView }) {
  //console.log(props.data)
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
