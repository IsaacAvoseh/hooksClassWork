import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({blog,handleChange, handleSave, closeForm, handleEditSubmit}) => {
    return (
        <div className='container' >
          {
            blog.type === 'edit' ?
                    <h1>Edit Blog</h1>
                    :
                    <h1>New Blog</h1>
          }
            <div className='card-body' >
                <div className='form-group' >
                   <div className='form-group' >
                        <input  className='form-control' type="text" name='title' placeholder='Enter Title' value={blog.title} onChange={ handleChange } />
                   </div>
                   <div className='form-group' >
                        <input className='form-control' type="text" name='desc' placeholder='Enter Description' value={blog.desc} onChange={handleChange} />
                   </div>
                   <div className='from-group' >
                        <textarea className='form-control' cols="30" rows="10" name='body' value={blog.body} onChange={handleChange} ></textarea>
                   </div>
                    <button onClick={ blog.type === 'edit'? handleEditSubmit: handleSave } className='btn btn-primary' type='button' >{ blog.type === 'edit'? 'Edit': 'Save' }</button>
                    <button onClick={closeForm} className='btn btn-warning mx-4' type='button' >Cancel</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Form;
