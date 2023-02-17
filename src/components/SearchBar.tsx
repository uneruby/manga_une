import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import { Value } from "sass";

export const SearchBar: React.FC = () => {
    const [searchText,setSearchText] = useState("")
    const search = () => {
        setSearchText(searchText)
        router.push("/SearchView")
    }

    return(
        <div>
            <div>
                <input value={searchText} onChange={(event) => setSearchText(event.target.value)}></input>
                <button onClick={search}>検索</button>
                <Link href="/">ホームへ</Link>
            </div>
        </div>
    )
}