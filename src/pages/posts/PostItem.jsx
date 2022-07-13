import React from 'react';
import MyButton from "../../UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className='post-item'>
            <h2 className='title-post'>{props.props.title}</h2>
            <p className='description-post'>{props.props.body}</p>
            <MyButton onClick={() => props.remove(props.props)}>Delete</MyButton>
        </div>
    );
};

export default PostItem;