import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const PostInfo = () => {
    const [postInfo, setPostInfo] = useState([]);

    const { id } = useParams();
    const history=useHistory();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostInfo(data))
    }, [id])

    return (
        <div style={{marginLeft:'5%',marginTop:'5%',width:'75%'}}>
             <div className="card mb-3">
                <h5 className="card-header text-dark">{postInfo.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{postInfo.body}</h5>
                    <button className="btn-warning" onClick={()=>history.push('/home')} >Close</button>
                </div>
            </div>
        </div>
    );
};

export default PostInfo;