import React from "react";
import { Proto } from "api/protocol"
import { GetServerSideProps,GetStaticProps } from "next"
import { makeDummyDetailView, makeDummyViewerView } from "@/mock/mock";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

export const getServerSideProps: GetServerSideProps = async(context) => {
    const chapterId = context.params.chapter_id
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
    console.log(props)
    return (
        <div>
            <p>ビュワー</p>
            <SearchBar/>
            <div>
                <p>第{props.data?.chapter?.id}話 {props.data?.chapter?.name}</p>
                <div>
                    {props.data?.imageUrls?.map((v,index) => (
                        <div key={index}>
                            <img src={v}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
    


