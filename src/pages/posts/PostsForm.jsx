import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const PostsForm = ({getData}) => {

    const [data, setData] = useState({title:'', description: ''})

    const createNewPost = event => {
       event.preventDefault()
        const newPost = {
            id: Date.now(),
            title: data.title,
            body: data.description
        }
        getData(newPost)
        setData({title: '', description: ''})
    }

    return (
        <div className='post-form'>
            <h2 className='title-form'>Create new post</h2>
            <MyInput
                type='text'
                placeholder='Write title...'
                value={data.title}
                onChange={e => setData({...data, title: e.target.value})}
            />
            <MyInput
                type='text'
                placeholder='Write description...'
                value={data.description}
                onChange={e => setData({...data, description: e.target.value})}
            />
            <MyButton onClick={createNewPost}>Create</MyButton>
        </div>
    );
};

export default PostsForm;