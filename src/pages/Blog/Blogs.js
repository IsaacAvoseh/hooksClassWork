import React, { useState } from 'react';
import Blogrow from '../../component/Blog/BlogRow';
import From from '../../component/Blog/Form';
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';
import BlogView from './BlogView';

const Blogs = () => {
const [blogs, setBlogs] = useState( JSON.parse(localStorage.getItem('blogs')) || []);
const [blog, setBlog] = useState({
    title: '',
    desc: '',
    body: ''
});

const navigate = useNavigate();

const handleChange = (e) => {
    setBlog({
        ...blog, 
        [e.target.name]: e.target.value
    });
}

const handleSave = () => {
    const newBlog = {
        id: nanoid(),
        ...blog
    }
    
console.log('handleSave', blog);
    const payload = [...blogs, newBlog];
    setBlogs(payload)
    //save to local storage 
    localStorage.setItem('blogs', JSON.stringify(payload)); 
console.log('payload', payload);
    setBlog('');
    setShowForm(false);
}

const handleView = (item) =>{
    navigate(`/blog/${item.id}`, {
       
        state: item,
    });
    console.log('View item', item);

}
const handleEdit = (item) =>{
    console.log('Edit item', item)
    const blogToEdit = { 'type': 'edit', ...item };
    setBlog(blogToEdit);
    console.log('blogToEdit', blogToEdit);
    // setBlog(item);
    setShowForm(true);
}

const handleEditSubmit = () =>{
    const newBlogs = blogs.map(blo => blo.id === blog.id ? blog : blo);
    setBlogs(newBlogs);
    setShowForm(false);
    setBlog('');
    console.log('handleEditSubmit', newBlogs);
    setBlogs(newBlogs);
    setShowForm(false);
    localStorage.setItem('blogs', JSON.stringify(newBlogs)); 

}

const closeForm = () =>{
    setShowForm(false);
    setBlog('')
}

const handleDelete = (item) =>{
    console.log('Delete item', item)
    const newBlogs = blogs.filter(blog => blog.id !== item.id);
    setBlogs(newBlogs);
}

const [showForm, setShowForm] = useState(false);
    return (
        <div>

         {
            showForm ? <From  setBlog={setBlog} blog={blog} handleChange={handleChange} handleSave={handleSave} handleEditSubmit={handleEditSubmit} closeForm={closeForm} /> :
            <div>
                <button className='btn btn-primary' onClick={() => setShowForm(true)
                
                }
                
                >Add Blog</button>
                <div className='container' >
                    <h1>Blogs</h1>
                    <div className='card-body' >
                        {
                            blogs.map(blog => <Blogrow key={blog.id} blog={blog} blogs={blogs} 
                                title={blog.title} desc={blog.desc} body={blog.body}
                                setBlogs={setBlogs} handleDelete={()=>handleDelete(blog)} handleView={()=>handleView(blog)} handleEdit={()=>handleEdit(blog)} />)
                        }
                    </div>  
                </div>
            </div>
         }
{/* 
{
                showForm ? <From /> : null

} */}
        </div>
    );
}

export default Blogs;
