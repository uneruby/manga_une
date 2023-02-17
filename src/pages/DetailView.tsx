import React from "react";
import { Proto } from "api/protocol"
import { GetServerSideProps,GetStaticProps } from "next"
import { makeDummyDetailView } from "@/mock/mock";
import { useRouter } from "next/router";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

export const getServerSideProps: GetServerSideProps = async (contest) => {
    const data = makeDummyDetailView(1)
    //const router = useRouter()
    //console.log(router.query.id)
    return{
        props: {...data}
    }
}

export default function Detail(props: {data: Proto.ITitleDetailView}) {
    return(
        <div>
            <p>作品詳細</p>
            <SearchBar/>
        </div>
    )
}