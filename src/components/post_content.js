import React from 'react';

const PostContent = ({post}) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Auteur : {post.author}</p>
        </div>
    );
};

export default PostContent;