import React from 'react'

export default function Card2({name, email, occupation, location, phone, image, setUser, deleteUser, id}) {

    const showModal = ()=>{
        setUser({ name, email, occupation, location, phone })
    }
    return (
        <div className="card item space">
            <div className="item-content" >
                <div className="user-profile" >
                    <img src={image} alt="" />
                    <h4 className="para" >{ name }</h4>
                    <p>{ occupation }</p>
                </div>
                <div className="details" >
                    <div className="info" >
                        <span><p>Email:</p></span> <span><p className="color" >{ email }</p></span>
                    </div>
                    <div className="info" >
                        <span><p>Location:</p></span> <span><p className="color" >{location}</p></span>
                    </div>
                    <div className="info" >
                       <span><p>Phone:</p></span> <span><p className="color" >{phone}</p></span>
                    </div>
                </div>
                <div className="icon" >
                    <span> <i onClick={showModal} type="button" className=" fas fa-pen" data-bs-toggle="modal" data-bs-target="#exampleModal">
                       
                    </i></span>
                    <span><i onClick={
                        () => deleteUser(id)
                    } className="fas fa-user-minus"></i></span>
                </div>
            </div>
            
        </div>
    )
}
