import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const BlogView = ({ title, desc, body, handleDelete,blog, handleEdit, handleView }) => {
    // const blog = blogs.find(blog => blog.id === parseInt(window.location.pathname.split('/')[2]));

    const {state} = useLocation();

    console.log('BlogView', state );

    return (
        <div className='container' >
            <div className='card-body' >
                <div>
                    <h1>{state.title}</h1>
                </div>
                <div>
                    <p>{state.desc}</p>
                </div>
                <div className >
                    <p> {state.body} </p>
                    <div>
                        <Link to='/blogs' className='btn btn-success mx-4' >Back</Link>
                    <Link to={`/blog/edit/${state.id}`} className='btn btn-primary mx-4' > Edit</Link>
                        
                        <button onClick={() => handleDelete(blog)} className='btn btn-danger mx-4' >Delete</button>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    );
}

export default BlogView;
