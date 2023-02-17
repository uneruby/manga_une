import React from "react";
import { Proto } from "api/protocol"
import { GetServerSideProps,GetStaticProps } from "next"
import { makeDummySearchView } from "@/mock/mock";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

export const getServerSideProps: GetServerSideProps = async () => {
    const data = makeDummySearchView("searchTitel")
    return{
        props: {...data}
    }
}

export default function SearchView(props: Proto.ISearchView) {
    return(
        <div>
            <p>検索結果</p>
            <SearchBar/>
            {props.titles?.map(title => 
                <div key={title.id} >
                    <Link href={"/title/"+title.id}>{title.name}<br/>
                      <img src={title.thumbnailUrl} alt={"thumbnail"+title.id}></img>
                    </Link>
                    <p>♡{title.likeCount}</p>
                    <p>{title.description}</p>
                </div>
            )}
        </div>
    )
}