import React from 'react';

const Blogrow = ({title, desc, body, blog, handleDelete, handleEdit, handleView}) => {
    // const blog = blogs.find(blog => blog.id === parseInt(window.location.pathname.split('/')[2]));

    return (
        <div className='container' >
            <div className='card-body' >
                <div>
                    <h1>{ title }</h1>
                </div>
                <div>
                <p>{ desc }</p>
                </div>
                <div className >
                <p> { body } </p>
                    <div>
                        <button onClick={()=>handleView(blog)} className='btn btn-success mx-4' >View</button>
                        <button onClick={()=>handleEdit(blog)} className='btn btn-primary mx-4' > Edit</button>
                        <button onClick={()=> handleDelete (blog)} className='btn btn-danger mx-4' >Delete</button>
                    </div>
                </div>
                <hr />
            </div>
           
        </div>
    );
}

export default Blogrow;
