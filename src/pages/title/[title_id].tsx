import React from "react";
import { Proto } from "api/protocol"
import { GetServerSideProps, GetStaticProps } from "next"
import { makeDummyDetailView } from "@/mock/mock";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const titleId = context.query.title_id
    console.log("titleID: ", titleId)
    const response = await fetch('http://153.126.185.116:18080/api/title/detail?title_id='+titleId+'&format=json')
    const data = await response.json()
    //const data = makeDummyDetailView(title)
    console.log(data)
    // const router = useRouter()
    // console.log(router.query.title)
    return {
        props: { data }
    }
}

export default function Detail(props: { data: Proto.ITitleDetailView }) {
    console.log(props)
    return (
        <div>
            <p>作品詳細</p>
            <SearchBar />
            <div>
                <div>
                    <p>{props.data?.title?.name}</p>
                    <img src={props.data?.title?.thumbnailUrl} alt={"thumbnail" + props.data?.title?.id}></img>
                    <p>♡{props.data?.title?.likeCount}</p>
                    <p>{props.data?.title?.description}</p>
                </div>
                {props.data?.chapters?.map((chapter) => (
                    <div key={chapter.id}>
                        <Link href={props.data?.title?.id+"/chapter/" + chapter.id}>{chapter.name}<br />
                            <img src={chapter.thumbnailUrl} alt={"thumbnail" + chapter.id}></img>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}