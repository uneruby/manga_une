import Link from "next/link";
import router from "next/router";
import React from "react";

export const SearchBar: React.FC = () => {
    const search = () => {
        router.push("/SearchView")
    }

    return(
        <div>
            <div>
                <input></input>
                <button onClick={search}>検索</button>
                <Link href="/">ホームへ</Link>
            </div>
        </div>
    )
}