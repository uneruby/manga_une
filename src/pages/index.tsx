import { GetServerSideProps, GetStaticProps } from "next"
import { Proto } from "api/protocol"
import { makeDummyHomeView, makeDummySearchView } from "../mock/mock"
import Link from "next/link"
import { SearchBar } from "../components/SearchBar"
import styles from "../styles/Home.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Autoplay, Pagination } from "swiper";


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
  const recomendTag:number = 0 + Math.floor(Math.random()* 3)
  //console.log(props.data?.titlesByTag[recomendTag].titles)
  const recomendation = props.data?.titlesByTag[recomendTag].titles
  console.log(recomendation)
  return (
    <div className={styles.Home}>
      <p className={styles.title}>ホーム画面</p>
      <SearchBar />
      <div >
        <Swiper
          style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={3}
          // slidesPerGroup={2}
          //dir="rtl"
          //loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation,Autoplay]}
          //centeredSlidesBounds={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          >
        {recomendation.map((v,index) => (
            // <div key={index}>
                <SwiperSlide key={index} className={styles.recomendTitle}>
                  <Link href={"/title/" + v.id }>
                    <img src={v.thumbnailUrl} className={styles.recomendImg}></img>
                  </Link>
                </SwiperSlide>
            // </div>
        ))}
        </Swiper>
      </div>
      {props.data?.titlesByTag?.map((v, i) => (
        <div key={i} className={styles.tag}>
          <p>{v.tag?.name}</p>
          <div>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            style={{
              "--swiper-navigation-color": "#fff",
            }}
            navigation={true}
            modules={[Navigation]}>
            {v.titles?.map((title) =>
            <SwiperSlide key={title.id}>
            <div className={styles.owntitle}>
              <Link href={"/title/" + title.id} className={styles.Link}>
                <p className={styles.title}>{title.name}</p>
                <img src={title.thumbnailUrl} alt={"thumbnail" + title.id} className={styles.img}></img>
              </Link>
              <p className={styles.likeCount}>♡{title.likeCount}</p>
              <p className={styles.description}>{title.description}</p>
            </div>
            </SwiperSlide>)
            }
            </Swiper>
          </div>
          {/* <div>{v.titles?.map(thumbnai => }</div> */}
        </div>))}
      {/* <div>
        {props.data?.titlesByTag}
      </div> */}
    </div>
  )
}
