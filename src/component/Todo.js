import React from 'react'

export default function Todo({title, description, handleDelete, handleEdit, handleComplete, completed,newTodo, setNewTodo,index, item, tit, alldesc, press}) {
    return (
        <div className="todo-item all-list">
            <div className="todo-item-inner">
                <div className="n-chk text-center">
                    <label className="new-control new-checkbox checkbox-primary">
                        <input type="checkbox" className="new-control-input inbox-chkbox" />
                        <span className="new-control-indicator" />
                    </label>
                </div>
                <div className="todo-content">
                    <h5 className="todo-heading" data-todoheading="Team meet at Starbucks">{ title }</h5>
                    <p className="meta-date">Aug, 07 2020</p>
                    <p className="todo-text" data-todohtml=""> { description }.</p>
                </div>
                <div class="text-center">
                    <button onClick={press} type="button" class="btn btn-primary mb-2 mr-2" data-toggle="modal" data-target="#exampleModal">
                    View
                    </button>


                    </div>
                <div className="priority-dropdown custom-dropdown-icon">
                    <div className="dropdown p-dropdown">
                        <a className="dropdown-toggle primary" href="#" role="button" id="dropdownMenuLink-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink-3">
                            <a className="dropdown-item danger" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg> High</a>
                            <a className="dropdown-item warning" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg> Middle</a>
                            <a className="dropdown-item primary" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg> Low</a>
                        </div>
                    </div>
                </div>
                <div className="action-dropdown custom-dropdown-icon">
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink-4">
                            <a className="edit dropdown-item" href="javascript:void(0);" onClick={() => handleEdit (item)} >Edit</a>
                            <a className="important dropdown-item" href="javascript:void(0);">Important</a>
                            <a className="dropdown-item delete" onClick={() => handleDelete(index, item) } href="javascript:void(0);">Delete</a>
                            <a className="dropdown-item permanent-delete" onClick={ handleDelete } href="javascript:void(0);">Permanent Delete</a>
                            <a className="dropdown-item revive" href="javascript:void(0);">Revive Task</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
