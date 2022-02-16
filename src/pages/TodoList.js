import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import data from './data'
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import Header from '../component/Header';
import ModalDialog from '../component/ModalDialog';
import Todo from '../component/Todo';


export default function TodoList() {
//  const data = todos
    const [ todos, setTodos] = useState(localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): data)
    const [ newTodo, setNewTodo ] = useState([
        {
           'title': '',
            'description': '',
             'completed': false,
            'tag': '',
            'id': ''
        }
    ])
    const [show, setShow] = useState(false);
    const [showAll, setShowAll] = useState(true);

    const handleShow = () => {
        console.log("how far");
        setShow(true);
    };
    

    const [ showForm, setShowForm ] = useState(false)

    // localStorage.setItem('todos', JSON.stringify(data))

    const saveTodos = ()=>(
        localStorage.setItem('todos', JSON.stringify(todos))
    )

    const handleChange = (e)=>{
        setNewTodo({ ...newTodo, [e.target.id]: e.target.value });
      
    }
 
    const handleShowForm = ()=>{
        setShowForm(!showForm)
    }

    const handleSubmit = (e)=>{
        // e.preventDefault();
        //check if input is empty
        if(newTodo.title === '' || newTodo.description ===  '' ){
            toast.error('Please fill all the fields', {
                position: toast.POSITION.TOP_CENTER
            });
        }else{
            //check if title is already exist
            const isExist = todos.find(todo => todo.title === newTodo.title)
            if(isExist){
                toast.error('Todo already exist', {
                    position: toast.POSITION.TOP_CENTER
                });
            }else{

                //add new todo
        const copy = {...newTodo, ["id"]:todos.length}

        let updatedTodos = [...todos, copy]

        setTodos(updatedTodos)


        console.log('updatedTodos', updatedTodos)
        
        //save todos to local storage
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        swal('Great !', 'Todo added successfully', 'success')
        
        setNewTodo({
            'title': '',
            'description': '',
                'completed': false,
            'tag': '',
            'id': ''
        })
        
        handleShowForm()     
    }
        }
    }

    const handelView = (id)=>{
        console.log('id', id)
        const todo = todos.find(todo => todo.id === id.id)
        // const todo = todos.find(todo => todo.id === id)
        // console.log('todo', todo)
        setNewTodo(todo)
        setShowAll(false)
        // handleShow()
    }

    const showA = () =>{
        setShowAll(true)
        setNewTodo('')
    }
        
    const handleDelete = (id)=>{

        console.log('id', id)
        let updatedTodos = todos.filter((todo, index)=> (index !== id))
        setTodos(updatedTodos)
        toast.error('Todo deleted successfully')
        saveTodos()
    }

    //edit todo
    const handleEdit = (item)=>{
        
        console.log('item', item)

        setNewTodo(item)
        
    }

    const handleEditSubmit = () =>{

        console.log('edit')
        const newArr = [...todos]
        const index = newArr.findIndex((item, i)=>{
            return item.id === newTodo.id
        })
        if(index > -1){
            newArr.splice(index, 1, newTodo)
            //newArr[index] = newTodo
        }
        setTodos(newArr)
        console.log("index  ", index);
        
       localStorage.setItem('todos', JSON.stringify(newArr))

        handleShowForm()
        swal('Great !', 'Todo updated successfully', 'success')


    }


 useEffect(() => {
    saveTodos()
 }, [])

    return (
        <>
       
            {/* <h1>Todo List</h1>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' onClick={handleShowForm}>Add Todo</button>
                    </div>
                </div>
            </div> */}
          

            {/* form to add todo with title and description */}
          
        <div>
        <Header/>
        


      
        <div id="content" className="main-content">
                    {
                        showForm ? (
                            <div className='col-md-6 offset-md-3'>
                                <form>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Title</label>
                                        <input type='text' className='form-control' id='title' placeholder='Title' onChange={handleChange} 
                                        value={newTodo.title}/>
                                      
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='description'>Description</label>
                                        <textarea className='form-control' id='description' onChange={handleChange}
                                            placeholder='Description' rows={3} 

                                        value={newTodo.description}></textarea>
                                
                                    </div>
                                    <button className='btn btn-primary' onClick={  handleSubmit  } >Add</button>
                                    <button className='btn btn-danger' onClick={handleShowForm}>Cancel</button>
                                </form>
                            </div>
                        ) :
                            ''

                    }



                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div class="modal-dialog modal-dialog-centered slideInUp" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{newTodo.title}</h5>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-text">
                                        {newTodo.description}
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button onClick={showA} class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i>Close</button>
                                    {/* <button type="button" class="btn btn-primary">Close</button> */}
                                </div>
                            </div>
                        </div>
                    </div>


          
               
            <div className="layout-px-spacing">
                <div className="page-header">
                    <nav className="breadcrumb-one" aria-label="breadcrumb">
                        <div className="title">
                            <h3>Todo List</h3>
                        </div>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Todo List</a></li>
                        </ol>
                    </nav>
                    <div className="toggle-switch">
                        <label className="switch s-icons s-outline  s-outline-secondary">
                            <input type="checkbox" defaultChecked className="theme-shifter" />
                            <span className="slider round">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="row layout-top-spacing">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="mail-box-container">
                            <div className="mail-overlay" />
                            <div className="tab-title">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-12 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x={8} y={2} width={8} height={4} rx={1} ry={1} /></svg>
                                        <h5 className="app-title">Todo List</h5>
                                    </div>
                                    <div className="todoList-sidebar-scroll">
                                        <div className="col-md-12 col-sm-12 col-12 mt-4 pl-0">
                                            <ul className="nav nav-pills d-block" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link list-actions active" id="all-list" data-toggle="pill" href="#pills-inbox" role="tab" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1={8} y1={6} x2={21} y2={6} /><line x1={8} y1={12} x2={21} y2={12} /><line x1={8} y1={18} x2={21} y2={18} /><line x1={3} y1={6} x2={3} y2={6} /><line x1={3} y1={12} x2={3} y2={12} /><line x1={3} y1={18} x2={3} y2={18} /></svg> Inbox <span className="todo-badge badge" /></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link list-actions" id="todo-task-done" data-toggle="pill" href="#pills-sentmail" role="tab" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg> Done <span className="todo-badge badge" /></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link list-actions" id="todo-task-important" data-toggle="pill" href="#pills-important" role="tab" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> Important <span className="todo-badge badge" /></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link list-actions" id="todo-task-trash" data-toggle="pill" href="#pills-trash" role="tab" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg> Trash</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a onClick={ handleShowForm } className="btn" id="addTask" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg> New Task</a>
                                </div>
                            </div>
                                    {
                                        showAll ? (
                            <div id="todo-inbox" className="accordion todo-inbox">
                                <div className="search">
                                    <input type="text" className="form-control input-search" placeholder="Search Here..." />
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu mail-menu d-lg-none"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
                                </div>
                                <div className="todo-box">
                                    <div id="ct" className="todo-box-scroll">
                                             
                                                {
                                                    todos.length > 0 ? todos.map((item, index) => (
                                                        <Todo
                                                            key={index}
                                                            title={item.title}
                                                            index={index}
                                                            description={item.description}
                                                            press={() => handelView(item)}
                                                            handleDelete={() => handleDelete(index, item)}
                                                            handleEdit={() => handleEdit(item)}
                                                            newTodo={newTodo}
                                                            

                                                        />

                                                    )) : (
                                                        <>
                                                            <p className='text-danger d-flex' >You have not added any todo</p>
                                                            <button className='btn btn-primary' onClick={handleShowForm} > Add new</button>
                                                        </>
                                                    )
                                                }
                                                            
                                    </div>
                                    <div className="modal fade" id="todoShowListItem" tabIndex={-1} role="dialog" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close" data-dismiss="modal"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                                    <div className="compose-box">
                                                        <div className="compose-content">
                                                            <h5 className="task-heading" />
                                                            <p className="task-text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn" data-dismiss="modal"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg> Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                        ) : (
                                            ''
                                        )
                                    }
                        </div>


                        {/* Modal */}
                       
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-section f-section-1">
                    <p className>Copyright © 2021 <a target="_blank" href="https://designreset.com">DesignReset</a>, All rights reserved.</p>
                </div>
                <div className="footer-section f-section-2">
                    <p className>Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
                </div>
            </div>
        </div>

        </div>
        </>
    )
}
