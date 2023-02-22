import React, { useState } from "react";
import { Proto } from "api/protocol"
import { GetServerSideProps,GetStaticProps } from "next"
import { makeDummyDetailView, makeDummyViewerView } from "@/mock/mock";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper";
import { reverse } from "dns";

import styles from "./chapter.module.scss"

export const getServerSideProps: GetServerSideProps = async(context) => {
    const chapterId = context.query.chapter_id
    console.log("chapterID: ", chapterId)
    const response = await fetch('http://153.126.185.116:18080/api/viewer?chapter_id='+chapterId+'&format=json')
    const data = await response.json()
    //const data = makeDummyViewerView(chapter)
    console.log(data)
    return {
        props: { data }
    }
}

export default function Detail(props: {data: Proto.IViewerView}) {
    //console.log(props)
    const [pageNumber,setPageNumber] = useState(0)
    const goNextPage = () => {
        if(pageNumber+1 != props.data?.imageUrls?.length - 1){
            setPageNumber(pageNumber + 2)
        }
    }
    const backBeforePage = () => {
        if(pageNumber != 0){
            setPageNumber(pageNumber - 2)
        }
    }
    const jumpDetailView = () => {
        history.back()
    }
    return (
        <div className={styles.Base}>
            <p className={styles.PageName}>ビュワー</p>
            <div className={styles.searchBar}>
                <SearchBar/>
            </div>
            <p className={styles.chapterTitle}>
                {/* 第{props.data?.chapter?.id}話  */}
                {props.data?.chapter?.name}</p>
            {/* <div>
                {pageNumber+1 == props.data?.imageUrls?.length - 1 ?
                    <button onClick={jumpDetailView}>作品詳細へ</button>
                    :""    
                }
                <img src={props.data?.imageUrls[pageNumber+1]} onClick={goNextPage} ></img>
                <img src={props.data?.imageUrls[pageNumber]} onClick={backBeforePage}></img>
            </div> */}
            <div >
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    slidesPerView={2}
                    slidesPerGroup={2}
                    dir="rtl"
                    pagination={{
                        type: "progressbar",
                        }}
                    navigation={true}
                    modules={[Pagination, Navigation,Scrollbar]}
                    scrollbar={true}
                    //centeredSlidesBounds={true}
                    >
                {props.data?.imageUrls?.map((v,index) => (
                    // <div key={index}>
                        <SwiperSlide key={index}>
                        <img src={v}></img>
                        </SwiperSlide>
                    // </div>
                ))}
                </Swiper>
            </div>
        </div>
    )
}
    


