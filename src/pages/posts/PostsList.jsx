import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({props, remove}) => {
    return (
        <div className='post-list'>
            <h2 className='title'>Post List</h2>
            {props.map(item =>
                <PostItem
                    key={item.id}
                    props={item}
                    remove={remove}
                />
            )}
        </div>
    );
};

export default PostsList;