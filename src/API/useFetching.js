import axios from "axios";

 export async function fetchPosts () {
    try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(responce.data)
    } catch (e) {
        alert(e)
    }
}