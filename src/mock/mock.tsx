import { Proto } from "api/protocol"
import { NumericLiteral } from "typescript"

export const makeDummyChapter = (id:number): Proto.IChapter => {
    return{
        id: id,
        name: "Chapter_" + id,
        thumbnailUrl: "https://placehold.jp/640x360.png?text=Chapter_" + id,
    }
}

export const makeDummyTitle = (id: number): Proto.ITitle => {
    console.log("Dummy")
    return{
        id: id,
        name: "Title_" + id,
        description: "ローラはオーストリアのシュタイアーマルクという自然豊かな土地で、幼い頃に母を亡くし、父と城に暮らしていた。",
        thumbnailUrl: "https://placehold.jp/640x360.png?text=Title_" + id,
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

export const makeDummyHomeView = (): Proto.IHomeView => {
    console.log("DummyHome")
    return {
        titlesByTag: [1,2,3,4,5].map(v => makeTitleByTag(v))
    }
}

export const makeDummyDetailView = (id: number): Proto.ITitleDetailView => {
    return {
        title: makeDummyTitle(id),
        chapters: [1,2,3].map(v => makeDummyChapter(v))
    }
}

export const makeDummyViewerView = (id: number): Proto.IViewerView => {
    return{
        chapter: makeDummyChapter(id),
        imageUrls: [1,2,3,4,5,6,7,8,9,10].map(v => "https://placehold.jp/640x360.png?text=Page_" +v),
    }
}

