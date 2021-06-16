import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    
    return (
  
            <div className="w-75 m-5 p-5 ">
                
                    {
                        posts.map(post => <PostDetails post={post}></PostDetails>)
                    }
                
            </div>
    );
};

export default Home;