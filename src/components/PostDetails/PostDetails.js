import React from 'react';
import { useHistory } from 'react-router-dom';

const PostDetails = (props) => {
    
    const { title, id } = props.post;
    const history=useHistory();

    return (
        <div>
            <div className="card mb-3">
                <h5 className="card-header">Top News</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button className="btn-info" onClick={() => history.push(`/postInfo/${id}`)}>See More</button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;