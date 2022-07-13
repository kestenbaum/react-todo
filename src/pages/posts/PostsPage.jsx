import React, {useEffect, useMemo, useState} from 'react';
import PostsForm from "./PostsForm";
import PostsList from "./PostsList";
import axios from "axios";
import MySelect from "../../UI/select/MySelect";
import MyInput from "../../UI/input/MyInput";
import MyModal from "../../UI/modal/MyModal";
import MyButton from "../../UI/button/MyButton";
import {usePosts} from "../../hooks/usePosts";
import {useFetching} from "../../API/useFetching";


const PostsPage = () => {

    useEffect(() => {
        fetchPosts()
    }, [])

    const [selectedSort, setSelectedSort] = useState('')

    const [posts, setPosts] = useState([])

    const [search, setSearch] = useState('')

    const [modal, setModal] = useState(false)

    const searchAndSortedPost = usePosts(posts, search)

    const removePost = post => {
        setPosts(posts.filter(element => element.id !== post.id))
    }

    const addPost = post => {
        setPosts([...posts, post])
        setModal(false)
    }

    const sortPosts = post => {
        setPosts([...posts].sort((a, b) => a[post].localeCompare(b[post])))
    }


    async function fetchPosts () {
        try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(responce.data)
        } catch (e) {
            alert(e)
        }
    }

    const modalActive = event => {
        event.preventDefault()
        setModal(true)
    }

    return (
        <div className='posts-wrapper'>
            <MyButton onClick={modalActive}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostsForm getData={addPost}/>
            </MyModal>
            <hr className='hr'/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Sorted'
                options={[
                    {value: 'title', name: 'Sorted to title'},
                    {value: 'body', name: 'Sorted to description'}
                ]}
            />
            <MyInput
                style={{width: '80%'}}
                type='text'
                placeholder='Search...'
                onChange = {e => setSearch(e.target.value)}
            />
            <PostsList props={searchAndSortedPost} remove={removePost}/>
        </div>
    );
};

export default PostsPage;