import { Proto } from "api/protocol"

export const makeDummyTitle = (id: number): Proto.ITitle => {
    console.log("Dummy")
    return{
        id: id,
        name: "Title_" + id,
        description: "ローラはオーストリアのシュタイアーマルクという自然豊かな土地で、幼い頃に母を亡くし、父と城に暮らしていた。",
        thumbnailUrl: "https://placehold.jp/640x360.png?text=" + id,
        likeCount: '1260'
    }
}

export const makeDummyTag = (id: number): Proto.ITag => {
    console.groupCollapsed("Tag")
    return{
        id: id,
        name: "Tag_" + id, 
    }
}

export const makeTitleByTag = (id: number): Proto.HomeView.ITitlesByTag => {
    return{
        tag: makeDummyTag(id),
        titles: [1,2,3,4,5].map(v => makeDummyTitle(v))
    }
}

export const makeDummySearchView = (word: string): Proto.ISearchView => {
    console.log("titles")
    return {
        titles: [1,2,3,4,5].map(v => makeDummyTitle(v)),
    }
}

export const makeDummyHome = () :Proto.IHomeView => {
    console.log("DummyHome")
    return {
        titlesByTag: [1,2,3,4,5].map(v => makeTitleByTag(v))
    }
}