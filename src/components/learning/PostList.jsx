import React, { useEffect, useState } from 'react'

export const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, [posts])

    return (
        <div>
            {posts.map((post) => {
                return(
                        <li key={post.id}>{post.title}</li>
                );
            })}
        </div>
    )
}
