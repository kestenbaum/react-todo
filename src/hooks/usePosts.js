import {useMemo} from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort){
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPost
}

export const usePosts = (posts, search) => {
    const sortedPost = useSortedPost(posts)

    const searchAndSortedPost = useMemo(() => {
        return sortedPost.filter(item => item.title.includes(search))
    }, [search, posts])

    return searchAndSortedPost
}